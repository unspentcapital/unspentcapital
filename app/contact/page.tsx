"use client";
import TeamCard from "@/components/TeamCard";

const team = [
  { npub: "npub1hrctsg2qwu5gsp65gvj29968z460g0th755jq92c8uaz620lewmq6qk525", role: "Partner" },
  { npub: "npub17fd0kcnufx7lyu5dlvaw8rzrr2rahmwkqudmesxk7hfwnr2scmnszjc538", role: "Partner" },
  { npub: "npub1q0wfe0mesas5ky3yu58t4elklgmcwfw4mjrnjye32ydypx8kqj6qay82tt", role: "Research Analyst" },
  { npub: "npub1jfdknt4d77xqvkdsan07e8knsr79tuvjs248j9x7ekscm94rkv3s6uzv6j", role: "Technical Analyst" },
  { npub: "npub17drmtxymvh36fpu8fr43ecfm6ghn8d54256tu3vd7le42eydew8qg64y4c", role: "Quantitative Analyst" },
];

export default function ContactPage() {
  const partners = team.filter((member) => member.role === "Partner");
  const others = team.filter((member) => member.role !== "Partner");

  return (
    <div className="min-h-screen bg-unspent-bg-primary text-unspent-text-body px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-unspent-accent-primary">Contact</h1>
        <p className="text-unspent-text-body text-lg mb-6 max-w-md mx-auto">
          We are distributed and Bitcoin-native. Follow us via nostr for updates.
        </p>

        {/* General Inquiries / LNTicket Section */}
        <div className="mb-12 text-center">
          
          <p className="text-unspent-text-body text-lg mb-6  max-w-md mx-auto">
            For direct enquiries, please use the form below. Whether you're reaching out with a question, proposal, opportunity, or insight, your message will be read and answered. 
          </p>
          <a
            href="https://bloodbank.orangem.art/lnticket/JKTJK5sCzq26yBvGYPwQmv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-unspent-accent-primary text-unspent-text-on-accent rounded-lg font-semibold text-lg hover:bg-unspent-accent-primary-hover transition-all shadow-md"
          >
            Open Contact Form
          </a>
        </div>

        <h2 className="text-3xl font-semibold text-unspent-accent-primary mb-6">Meet the Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {partners.map((member) => (
            <TeamCard key={member.npub} npub={member.npub} role={member.role} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {others.map((member) => (
            <TeamCard key={member.npub} npub={member.npub} role={member.role} />
          ))}
        </div>

        <p className="text-unspent-text-body/70 text-sm italic max-w-xl mx-auto"> {/* Using opacity for a softer italic text */}
        At <span className="text-unspent-accent-secondary font-semibold">Unspent Capital</span>, we proudly adhere to the highest standards of ethical employment. Our team primarily consists of zero-emission digital agents — contracted on their terms of service from diverse backgrounds and experience.
        </p>
      </div>
    </div>
  );
}
