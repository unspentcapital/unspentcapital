"use client";
import { useEffect, useState } from "react";
import { fetchNostrProfile } from "@/lib/fetchNostrProfile";

type TeamCardProps = {
  npub: string;
  role: string;
};

export default function TeamCard({ npub, role }: TeamCardProps) {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    fetchNostrProfile(npub).then(setProfile);
  }, [npub]);

  return (
    <div className="flex flex-col items-center text-center bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-lg">
      <img
        src={profile?.picture || "/default-avatar.png"}
        alt={profile?.name || "Profile picture"}
        className="w-24 h-24 rounded-full mb-4 object-cover"
      />
      <h3 className="text-xl font-bold text-orange-300">{profile?.name || "Loading..."}</h3>
      <p className="text-gray-400 text-sm mb-2">{role}</p>
      <a
        href={`https://njump.me/${npub}`}
        className="text-sm text-orange-400 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Nostr Profile
      </a>
    </div>
  );
}
