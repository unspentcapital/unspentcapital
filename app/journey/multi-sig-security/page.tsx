export default function MultiSigSecurityPage() {
  return (
    <div className="min-h-screen bg-unspent-bg-primary text-unspent-text-body py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-unspent-accent-primary mb-8 text-center">
          Multi-Sig Security: Upgrade Your Protection
        </h1>

        <div className="space-y-6 text-lg text-unspent-text-body">
          <p>
            If your Bitcoin savings are growing, your security should grow with it. A single hardware wallet might be enough to get started—but it’s not world-class protection. When the stakes are high, it’s time to upgrade to <strong>multi-signature (multisig)</strong>.
          </p>

          <p>
            Multisig means that spending Bitcoin requires more than one key. It removes single points of failure, allows for recovery planning, and introduces redundancy by design. You can start thinking in terms of <strong>threat models, geographical distribution, and inheritance planning</strong>.
          </p>

          <h2 className="text-2xl font-semibold text-unspent-accent-secondary mt-8 mb-4">How Multisig Works</h2>
          <p>
            Multisig wallets follow an “M-of-N” format: out of N total keys, at least M are required to sign a transaction. Common setups include:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              <strong>2-of-3:</strong> You hold two keys; a third party holds one for recovery or co-signing. You can lose one key and still spend your Bitcoin.
            </li>
            <li>
              <strong>3-of-5:</strong> More redundancy, ideal for distributing keys across devices, locations, or trusted individuals.
            </li>
          </ul>
          <p>
            Even if one device is lost or compromised, your Bitcoin remains secure. No single key is enough to spend the funds—<strong>coordination is required</strong>.
          </p>

          <h2 className="text-2xl font-semibold text-unspent-accent-secondary mt-8 mb-4">Collaborative Custody Services</h2>
          <p>
            You don’t need to go it alone. <strong>Collaborative custody</strong> services help you set up and manage a multisig wallet while ensuring you remain in control. You hold the majority of the keys; they assist only if needed.
          </p>
          <p>Leading options include:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              <a href="https://unchained.com/" className="text-unspent-accent-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                Unchained Capital
              </a>: Offers concierge onboarding, key storage, and inheritance services.
            </li>
            <li>
              <a href="https://www.swanbitcoin.com/multi-sig/" className="text-unspent-accent-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                Swan Bitcoin
              </a>: Provides multisig vaults as part of their private client services.
            </li>
          </ul>
          <p>
            These services make world-class Bitcoin security more accessible—especially for families, business treasuries, or high-net-worth individuals.
          </p>

          <p className="mt-8 border-t border-[var(--color-bg-secondary)] pt-6 text-unspent-text-secondary">
  Multisig is the gold standard for securing significant Bitcoin. It distributes trust, protects against loss, and allows for long-term planning. If your stack has grown, this is the next chapter in your Bitcoin journey.
</p>

<p className="text-unspent-text-body mt-6">
  Ready to contribute back? <a href="/journey/build-on-bitcoin" className="text-unspent-accent-primary underline">Build with Bitcoin</a>. Run a node. Integrate Lightning into your project. Or support the builders by reporting bugs, giving feedback, and spreading the word. Everyone has a role to play.
</p>

        </div>
      </div>
    </div>
  );
}
