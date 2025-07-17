export default function BuildOnBitcoin() {
  return (
    <div className="min-h-screen bg-unspent-bg-primary text-unspent-text-body py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-unspent-accent-primary mb-8 text-center">
          Build on Bitcoin: Contribute Like an Owner
        </h1>

        <div className="space-y-6 text-lg text-unspent-text-body">
          <p>
            Bitcoin is open-source, permissionless, and owned by everyone who uses it. If you hold Bitcoin, you’re a stakeholder. And with that ownership comes opportunity—whether you're a builder, business owner, or just someone who wants to help shape the future of money.
          </p>

          <p>
            If you’re entrepreneurial or technical, consider running a node. Build something. Accept payments. Create your own Lightning address and plug into the global Bitcoin economy. If you’re not technical—no problem. Report bugs. Share feedback. Zap the builders. Support the projects you want to see grow.
          </p>

          <h2 className="text-2xl font-semibold text-unspent-accent-secondary mt-8 mb-4">Why Run a Lightning Node?</h2>
          <p>
            Running a node isn’t just for nerds. It’s for people who want independence, reliability, and a deeper connection to the network. Operating your own Lightning node allows you to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Receive payments directly</strong> without a third party.</li>
            <li><strong>Enhance privacy</strong> and retain control over your data.</li>
            <li><strong>Support the network</strong> and decentralize Bitcoin’s infrastructure.</li>
            <li><strong>Experiment and earn</strong>—open channels, set fees, route payments.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-unspent-accent-secondary mt-8 mb-4">Build or Integrate</h2>
          <p>
            Whether you're building a product, launching a service, or just tinkering, there are powerful tools ready to use:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              <strong>LNbits:</strong> Modular toolkit for building Lightning-enabled apps—POS, vouchers, paywalls, and more. <a href="https://lnbits.com/" className="text-unspent-accent-secondary hover:underline" target="_blank" rel="noopener noreferrer">(Learn more)</a>
            </li>
            <li>
              <strong>Alby:</strong> Connect your browser or app to Lightning and Nostr. Easily send/receive sats. <a href="https://getalby.com/" className="text-unspent-accent-secondary hover:underline" target="_blank" rel="noopener noreferrer">(Learn more)</a>
            </li>
            <li>
              <strong>Nostr Wallet Connect (NWC):</strong> Enable Lightning payments from social apps and websites—secure, fast, and frictionless.
            </li>
          </ul>

          <p>
            These tools can power stores, subscriptions, digital content, donation platforms, micro-incentives, and more.
          </p>

          <h2 className="text-2xl font-semibold text-unspent-accent-secondary mt-8 mb-4">Not a Developer? You Still Matter.</h2>
          <p>
            Bitcoin is open to all. You don’t need to code to contribute. Here’s how you can help:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Support projects you believe in—zap them some sats.</li>
            <li>Give honest feedback. Report bugs. Help improve the tools you use.</li>
            <li>Join communities. Share ideas. Spread the signal.</li>
          </ul>

          <p className="mt-8 border-t border-[var(--color-bg-secondary)] pt-6 text-unspent-text-secondary">
            We all own common equity in Bitcoin. If we think like owners, we act with more intention. Whether you build, support, or simply use, you’re shaping the future. Get involved and help make Bitcoin better.
          </p>
        </div>
      </div>
    </div>
  );
}
