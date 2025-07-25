"use client";
import React, { useState } from "react";
import FiatTicker from "./FiatTicker";

// --- Constants for View State ---
const VIEW_UNSPENT = "unspent";
const VIEW_SPENT = "spent";

// --- Data Types ---
interface JourneyStep {
  title: string;
  href: string;
  body: string;
}

interface Project {
  title: string;
  description: React.ReactNode;
  link: string;
  linkLabel: string;
  tags: string[];
}

// --- Static Data ---
const journeyStepsData: JourneyStep[] = [
  {
    title: "Back Bitcoin",
    href: "/journey/backing-bitcoin",
    body: `Get skin in the game. Buy a Bitcoin ETF from your stock broker or include it in your retirement account. It gives you exposure to price movements and an incentive to start learning.`,
  },
  {
    title: "Stack Sats",
    href: "/journey/stacking-sats",
    body: `Start using it. Choose a Lightning wallet, custodial or not, doesn’t matter at this stage and grab a Lightning address. It’s like an email address for money. Earn and spend sats. Explore the Bitcoin economy.`,
  },
  {
    title: "Save UTXOs",
    href: "/journey/saving-utxos",
    body: `Secure your stack. Once you’ve built up a meaningful amount, move it on-chain and hold the keys yourself. That’s when you’re really saving, holding UTXOs secured by your own hardware device.`,
  },
  {
    title: "Secure Multisig",
    href: "/journey/multi-sig-security",
    body: `Upgrade your security. If your stack has grown, it’s time for world-class multisig. Think threat modelling, geographical distribution, and redundancy.`,
  },
  {
    title: "Build on Bitcoin",
    href: "/journey/build-on-bitcoin",
    body: `If you’re entrepreneurial or technical, run a node. Integrate Lightning into your project. Create your own Lightning address. Not technical? No worries. Contribute in other ways — report bugs, share feedback, support good projects.`,
  },
];

const projectsData: Project[] = [
  {
    title: "Breez",
    description: (
      <>
        Breez is pioneering mobile Lightning solutions. It's your non-custodial gateway to Bitcoin payments.
      </>
    ),
    link: "http://breez.technology/",
    linkLabel: "breez.technology",
    tags: ["Private Equity"],
  },
  {
    title: "Satoshi Energy",
    description: (
      <>
        Site development, energy brokerage, and software to maximize the value of flexible datacenters.
      </>
    ),
    link: "https://satoshienergy.com/",
    linkLabel: "satoshienergy.com",
    tags: ["Private Equity"],
  },
  {
    title: "Iren",
    description: (
      <>
        Data Centers powered by sustainable energy and optimized with Bitcoin. <br />
      </>
    ),
    link: "https://iren.com/",
    linkLabel: "iren.com",
    tags: ["Public Equity"],
  },
  {
    title: "Blockstream",
    description: (
      <>
        A Bitcoin infrastructure company, developing products and services like the Liquid Network, Blockstream Satellite, Jade hardware wallet, and enterprise-grade mining operations.
      </>
    ),
    link: "https://blockstream.com/",
    linkLabel: "blockstream.com",
    tags: ["Digital Security", "Product"],
  },
  {
    title: "Orangemart",
    description: (
      <>
       Orangemart is a 24/7 marketplace and player hub on modded Rust servers, built for those learning to survive and thrive with Bitcoin.
      </>
    ),
    link: "https://orangem.art/",
    linkLabel: "orangem.art",
    tags: ["Donation"],
  },
  {
    title: "Geyser",
    description: (
      <>
        Geyser rallies the Bitcoin community to fund ideas, products, and causes that drive real-world adoption from the ground up.
      </>
    ),
    link: "https://geyser.fund/",
    linkLabel: "geyser.fund",
    tags: ["Donation", "Product"],
  },
  {
    title: "NoGood",
    description: (
      <>
        A Bitcoin artist and illustrator running a 24/7 online radio.
      </>
    ),
    link: "https://www.nogood.studio/",
    linkLabel: "nogood.studio",
    tags: ["Donation", "Product"],
  },
  {
    title: "Coinos",
    description: (
      <>
        An open source web Bitcoin, Lightning, Liquid and Ecash wallet with a focus on usability.
      </>
    ),
    link: "https://coinos.io/",
    linkLabel: "coinos.io",
    tags: ["Donation"],
  },
  {
    title: "Sparrow",
    description: (
      <>
        An open source desktop Bitcoin wallet focused on security, privacy, and feature-richness for advanced users.
      </>
    ),
    link: "https://sparrowwallet.com/",
    linkLabel: "sparrowwallet.com",
    tags: ["Donation"],
  },
  {
    title: "Joltz",
    description: (
      <>
        Self-custodial payments and swaps supporting BTC and Taproot Assets (Bitcoin-native stablecoins).
      </>
    ),
    link: "https://joltz.app/",
    linkLabel: "joltz.app",
    tags: ["Private Equity"],
  },
  {
    title: "Sideswap",
    description: (
      <>
        A peer-to-peer marketplace for swapping Liquid Network assets like L-BTC, stablecoins, and security tokens.
      </>
    ),
    link: "https://sideswap.io/",
    linkLabel: "sideswap.io",
    tags: ["Digital Security"],
  },
  {
    title: "Block Inc",
    description: (
      <>
        A global technology company with a focus on financial services, including Cash App, Square, and TBD, an open developer platform focused on Bitcoin.
      </>
    ),
    link: "https://block.xyz/",
    linkLabel: "block.xyz",
    tags: ["Public Equity"],
  },
  {
    title: "Strategy",
    description: (
      <>
        A business intelligence company that has adopted Bitcoin as its primary treasury reserve asset, holding a significant amount of BTC.
      </>
    ),
    link: "https://www.strategy.com/",
    linkLabel: "strategy.com",
    tags: ["Public Equity"],
  },
  {
    title: "Zap Stream",
    description: (
      <>
      An open source NOSTR live streaming service.


      </>
    ),
    link: "https://zap.stream/",
    linkLabel: "zap.stream",
    tags: ["Donation", "Product"],
  },
  {
    title: "NoStrudel",
    description: (
      <>
        An open source nostr web client. The jack of all trades.
      </>
    ),
    link: "https://nostrudel.ninja/",
    linkLabel: "nostrudel.ninja",
    tags: ["Donation"],
  },
  {
    title: "Street Cyber",
    description: (
      <>
        Bitcoin street art and education.
      </>
    ),
    link: "https://streetcyber.store/",
    linkLabel: "streetcyber.store",
    tags: ["Product"],
  },
  {
    title: "Umbrel",
    description: (
      <>
        Open source home cloud operating system. Store your files, download and stream media, run a Bitcoin node, and more — all in your home.
      </>
    ),
    link: "https://umbrel.com/",
    linkLabel: "umbrel.com",
    tags: ["Product"],
  },
  {
    title: "Good Morning Bitcoin",
    description: (
      <>
        Internet radio station focused on Bitcoin content.
      </>
    ),
    link: "https://goodmorningbitcoin.com/",
    linkLabel: "goodmorningbitcoin.com",
    tags: ["Donation"],
  },
  {
    title: "OpenSats",
    description: (
      <>
        A public charity which aims to fund Bitcoin-related free and open-source projects and associated education and research initiatives.
      </>
    ),
    link: "https://opensats.org/",
    linkLabel: "opensats.org",
    tags: ["Donation"],
  }
];

// --- Child Components ---
interface JourneyStepItemProps {
  step: JourneyStep;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const JourneyStepItem: React.FC<JourneyStepItemProps> = ({ step, index, isOpen, onToggle }) => (
  <div className="p-4 bg-unspent-bg-secondary rounded-lg shadow-md border-l-4 border-unspent-accent-primary mb-4 text-unspent-text-body">
    <div
      className="text-xl font-bold text-unspent-accent-secondary cursor-pointer flex justify-between items-center"
      onClick={onToggle}
    >
      <div className="flex items-center flex-grow">
        <span className="mr-3 sm:mr-4 bg-unspent-bg-primary text-unspent-accent-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold ring-1 ring-unspent-accent-primary flex-shrink-0">
          {index + 1}
        </span>
        <span className="flex-grow">{step.title}</span>
      </div>
      <div className="flex items-center ml-2 sm:ml-4 flex-shrink-0">
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-90' : ''} mr-2 sm:mr-3`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-unspent-accent-secondary">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <a
          href={step.href}
          className="text-sm text-unspent-text-on-accent bg-unspent-accent-primary hover:bg-unspent-accent-primary-hover px-2 sm:px-3 py-1 sm:py-1.5 rounded-md font-medium transition-colors whitespace-nowrap"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()} // Prevent collapse on link click
        >
          Read More &rarr;
        </a>
      </div>
    </div>
    {isOpen && (
      <div className="mt-3 pt-3 border-t border-unspent-bg-primary/50 text-unspent-text-secondary">
        <p className="whitespace-pre-line">{step.body}</p>
      </div>
    )}
  </div>
);

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="p-4 bg-unspent-bg-secondary rounded-lg shadow-subtle w-full max-w-full break-words text-unspent-text-body">

 {/* Added text-unspent-text-body for default text */}
    <h3 className="text-xl font-semibold text-unspent-accent-primary">{project.title}</h3>
    <p className="text-unspent-text-secondary text-sm mb-2">{project.description}</p>
    <div className="flex justify-center flex-wrap gap-2 mb-2">
      {project.tags.map((tag, idx) => (
        <span key={idx} className="text-xs bg-unspent-bg-primary text-unspent-text-secondary px-2 py-1 rounded-full">
          {tag}
        </span>
      ))}
    </div>
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-unspent-accent-secondary hover:underline">
      {project.linkLabel} &rarr;
    </a>
  </div>
);

// --- Helper Functions for Styling ---
const getTabViewButtonClasses = (isActive: boolean): string =>
  `px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all font-semibold text-base sm:text-lg ${ // Needs full theming
    isActive ? "bg-unspent-accent-primary text-unspent-text-on-accent shadow-lg" : "bg-unspent-bg-primary text-unspent-text-body hover:bg-unspent-bg-secondary"
  }`;

const getTagFilterButtonClasses = (isActive: boolean): string =>
  `px-4 py-2 max-w-[90vw] truncate rounded-full text-sm font-medium transition-colors ${ // Added transition-colors
    isActive
      ? "bg-unspent-accent-primary text-unspent-text-on-accent" // Use themed colors for active state
      : "bg-unspent-bg-primary text-unspent-text-secondary hover:bg-unspent-bg-secondary hover:text-unspent-text-body" // Use themed colors for inactive state
  }`;

export default function Home() {
  const [view, setView] = useState<string>(VIEW_UNSPENT);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
const [openStepIndex, setOpenStepIndex] = useState<number | null>(0); // or `null` for all collapsed by default

  const uniqueTags = Array.from(new Set(projectsData.flatMap((p) => p.tags)));

  // Filter projects first
  let projectsToDisplay = selectedTag
    ? projectsData.filter((p) => p.tags.includes(selectedTag))
    : projectsData;
  // Then sort the filtered (or all) projects alphabetically by title
  projectsToDisplay = projectsToDisplay.sort((a, b) => a.title.localeCompare(b.title));

  return (
        <div className={`min-h-screen flex flex-col items-center px-4 sm:px-6 py-6 ${
      view === VIEW_SPENT ? 'theme-spent' : ''
    }`}> {/* Note: bg-unspent-bg-primary and text-unspent-text-body are removed from here as they should be applied globally via the body tag in globals.css */}
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-7xl">
        <p className="text-lg text-unspent-text-secondary mb-8 max-w-2xl text-center leading-relaxed">
          Exploring the philosophy of Unspent Capital and showcasing projects built with Spent Capital.
        </p>

        <div className="sticky top-0 z-10 mb-10 flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 border-b border-unspent-bg-secondary p-2 rounded-b-lg">

          <button
            className={getTabViewButtonClasses(view === VIEW_UNSPENT)}
            onClick={() => setView(VIEW_UNSPENT)}
          >
            Unspent Capital
          </button>
          <button
            className={getTabViewButtonClasses(view === VIEW_SPENT)}
            onClick={() => setView(VIEW_SPENT)}
          >
            Spent Capital
          </button>
        </div>

        <div className="text-center w-full max-w-4xl p-4 sm:p-6 bg-unspent-bg-secondary rounded-xl shadow-xl border border-unspent-bg-primary overflow-hidden">
  {view === VIEW_UNSPENT && (
    <>
      <div className="text-unspent-text-body text-lg leading-relaxed mb-8">
        <h2 className="text-3xl font-bold mb-6 text-unspent-accent-primary">The Philosophy of Unspent Capital</h2>

        <div className="space-y-6 text-left text-unspent-text-secondary mt-6">
          <div className="text-unspent-text-body text-lg leading-relaxed mb-8"> {/* Changed default text color for this section */}
                
                <p className="mb-4">
                  Bitcoin's unique nature, including its immutable monetary supply, resistance to censorship, and global distribution and accessibility, positions it as a powerful form of <strong>Unspent Capital</strong>. This is the bedrock of financial sovereignty, distinct from capital that has been spent.
                </p>
                
                <div className="space-y-6 mb-6 text-left text-unspent-text-secondary"> {/* Set default text color for nested paragraphs */}
                  <div>
                    <h3 className="text-xl font-semibold text-unspent-accent-primary mb-1 text-unspent-accent-secondary">Unspent Capital</h3> {/* Explicitly set heading color */}
                    <p className="pl-4 border-l-2 border-unspent-accent-secondary leading-relaxed"> {/* Changed border color */}
                      <strong>Unspent Capital</strong> is savings. It's secure and future proof, holding and growing its purchasing power over time. It is the default allocation for all capital and therefore the opportunity cost of all spending.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-unspent-accent-primary mb-1 text-unspent-accent-secondary">Spent Capital</h3> {/* Explicitly set heading color */}
                    <p className="pl-4 border-l-2 border-unspent-accent-secondary leading-relaxed"> {/* Changed border color */}
                      Everything else is <strong>Spent Capital</strong>. Whether it's cost of living expenses, purchases of products, investments in assets or donations to projects, it is all Spent Capital. It is capital that is working to build the future you want to see in the world.
                    </p>
                  </div>
                </div>
                
              </div>

          
         
        </div>

        <p className="leading-relaxed text-unspent-text-body mt-6 text-left">
          By separating Unspent from Spent Capital, you gain clarity. You protect what you’ve earned while spending with purpose.
        </p>
      </div>

      <div className="mb-8 w-full">
        <h2 className="text-3xl font-bold mb-4 text-unspent-accent-primary">Bitcoin: Tracking its Growth as Unspent Capital</h2>
        <iframe
          src="https://www.tradingview.com/embed-widget/advanced-chart/?symbol=CRYPTOCAP%3ABTC&interval=W&theme=dark&hide_top_toolbar=true&hide_legend=true&locale=en"
          title="Bitcoin Market Cap - TradingView Chart"
          height="400"
          className="w-full rounded-xl shadow-lg border border-unspent-bg-primary/60"
          scrolling="no"
        ></iframe>
        <p className="text-unspent-text-secondary text-sm mt-3 text-center leading-relaxed">
          We first published our thesis on why Bitcoin is a safe haven on <a href="https://x.com/jamesviggy/status/1237854624456925184" target="_blank" rel="noopener noreferrer" className="underline text-unspent-accent-secondary hover:text-unspent-accent-secondary-hover">March 12, 2020</a>. Over five years later, with Bitcoin’s market cap rising from $143 billion to over $2 trillion, that thesis has been validated—making Unspent Capital one of the top-performing saving strategies of the period.
        </p>
      </div>

      <div className="text-left">
        <h2 className="text-2xl font-semibold mb-4 text-unspent-accent-primary">Bitcoin Journey</h2>
        {journeyStepsData.map((step, i) => (
  <JourneyStepItem
    key={i}
    step={step}
    index={i}
    isOpen={openStepIndex === i}
    onToggle={() => setOpenStepIndex(openStepIndex === i ? null : i)}
  />
))}
      </div>
    </>
  )} {/* Closing for VIEW_UNSPENT */}
          {view === VIEW_SPENT && ( // VIEW_SPENT content now follows directly, inside the same parent div
            <>
              <h2 className="text-3xl font-semibold text-unspent-accent-primary mb-4">The Art and Importance of Spending</h2> {/* Changed heading color */}
              <FiatTicker />
              
              <div className="text-unspent-text-body text-lg leading-relaxed mb-6 space-y-4 text-left">
               
                <p></p>
                <p>
                  Learning to spend wisely is essential to saving effectively. As your Unspent Capital appreciates in purchasing power, you naturally become more discerning, with each purchase weighed against the future potential of the capital you're giving up.
                </p>
                <p>
                  The goal of Spent Capital isn’t to generate returns. By simply holding Bitcoin, your Unspent Capital is already doing that. Spent Capital is about using resources deliberately; to acquire what you value and help build the world you want to live in.
                </p>
                <p>
                  Great spending shapes a future worth inhabiting; poor spending contributes to the one you're trying to escape. While Unspent Capital powers personal wealth, your Spent Capital is how you influence the world. The art lies in spending with intention.
                </p>
                <p>
                  This section highlights projects and initiatives where capital has been consciously deployed to support the Bitcoin ecosystem and beyond.
                </p>
              </div>
              <div className="mb-6 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={getTagFilterButtonClasses(selectedTag === null)}
                >
                  All
                </button>
                {uniqueTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={getTagFilterButtonClasses(selectedTag === tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectsToDisplay.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </>
          )}
        </div> {/* This div now closes after both UNSPENT and SPENT conditional blocks */}
      </div> {/* This is the closing div for "flex flex-col items-center justify-center flex-grow w-full max-w-7xl" */}
      <footer className="mt-12 w-full max-w-7xl border-t border-brand-blue-dark/60 pt-6 flex justify-center">
  <a
    href="/contact"
    className="px-6 py-3 bg-unspent-accent-primary text-unspent-text-on-accent rounded-lg font-semibold text-lg hover:bg-unspent-accent-primary-hover transition-all" // Updated button colors
  >
    Contact
  </a>
</footer>
    </div>
  );
}
