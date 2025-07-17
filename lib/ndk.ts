// lib/ndk.ts
import NDK from "@nostr-dev-kit/ndk";

let ndkInstance: NDK | null = null;
let ndkInitializationPromise: Promise<NDK> | null = null;

const RELAYS = [
  "wss://nos.lol",
  "wss://relay.damus.io",
  "wss://pyramid.fiatjaf.com",
  "wss://relay.nostr.band", // Added a common one, ensure your list is comprehensive
  "wss://relay.snort.social",
  "wss://purplepag.es",
];

async function initializeNDK(): Promise<NDK> {
  if (ndkInstance) {
    // If instance exists, ensure it's connected or try to connect
    if (!ndkInstance.pool.stats().connected) {
      console.log("NDK instance exists but not connected, attempting to connect...");
      try {
        await ndkInstance.connect(2000); // 2s timeout
        console.log("NDK re-connected successfully.");
      } catch (error) {
        console.error("Failed to re-connect NDK:", error);
      }
    }
    return ndkInstance;
  }

  console.log("Initializing NDK for the first time...");
  const newNdk = new NDK({ explicitRelayUrls: RELAYS });
  await newNdk.connect(5000); // 5s timeout for initial connection
  console.log("NDK connected successfully.");
  ndkInstance = newNdk;
  return ndkInstance;
}

export const getNDK = (): Promise<NDK> => {
  if (!ndkInitializationPromise) {
    ndkInitializationPromise = initializeNDK().catch(err => {
      ndkInitializationPromise = null; // Reset on failure to allow retry
      throw err;
    });
  }
  return ndkInitializationPromise;
};
