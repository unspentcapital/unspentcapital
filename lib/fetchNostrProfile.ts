import { NDKUserProfile } from "@nostr-dev-kit/ndk";
import { getNDK } from "@/lib/ndk";

interface NostrProfile {
  name: string;
  picture: string;
  about: string;
  displayName?: string;
  nip05?: string;
}

export async function fetchNostrProfile(npub: string): Promise<NostrProfile> {
  try {
    const ndk = await getNDK(); // Get the initialized NDK instance
    const user = ndk.getUser({ npub });

    // Fetch profile with a timeout
    // user.fetchProfile() should get the kind 0 event.
    // The explicit ndk.fetchEvent might be redundant or could be a way to force a newer fetch.
    // For now, let's rely on user.fetchProfile() and add a timeout for robustness.
    const profilePromise = user.fetchProfile({ closeOnEose: true }); // closeOnEose can help ensure it doesn't hang indefinitely
    const timeoutPromise = new Promise<null>((_, reject) =>
      setTimeout(() => reject(new Error(`Timeout fetching profile for ${npub}`)), 7000) // 7s timeout
    );

    const fetchedProfile = await Promise.race([profilePromise, timeoutPromise]);

    const meta: NDKUserProfile | undefined = user.profile; // Access profile after fetch attempt

    if (!meta || Object.keys(meta).length === 0) {
      console.warn(`No profile metadata found for ${npub} after fetch attempt. User object profile:`, user.profile);
    }

    // Helper to safely get a trimmed string from a value, converting numbers to strings.
    // Returns undefined if the value is null, undefined, or an empty string after trimming.
    const getSanitizedString = (value: any): string | undefined => {
      if (value === null || typeof value === 'undefined') return undefined;
      const strValue = String(value).trim();
      return strValue === "" ? undefined : strValue;
    };

    const profileDisplayName = getSanitizedString(meta?.displayName);
    const profileDisplay_name = getSanitizedString(meta?.display_name); // common alternative
    const profileName = getSanitizedString(meta?.name);

    // Determine the best name for display, prioritizing display names
    const bestNameForDisplay = profileDisplayName || profileDisplay_name || profileName || npub.substring(0, 12) + "...";

    // Specifically for the 'displayName' field in NostrProfile, ensuring it's string | undefined
    const finalDisplayName = profileDisplayName || profileDisplay_name;

    return {
      name: bestNameForDisplay,
      displayName: finalDisplayName,
      picture: getSanitizedString(meta?.picture) || getSanitizedString(meta?.image) || "/default-profile.png", // Added meta.image as another common variant
      about: getSanitizedString(meta?.about) || "",
      nip05: getSanitizedString(meta?.nip05),
    };
  } catch (error) {
    console.error(`Failed to fetch profile for ${npub}:`, error);
    return {
      name: "Error loading profile", // More descriptive for actual errors
      picture: "/default-profile.png",
      about: "",
      // displayName and nip05 will be undefined by default due to the interface
    };
  }
}
