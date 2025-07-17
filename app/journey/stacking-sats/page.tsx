export default function StackingSatsPage() {
  return (
    <div className="min-h-screen bg-unspent-bg-primary text-unspent-text-body py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-unspent-accent-primary mb-8 text-center">
          Start Using Bitcoin: Stacking Sats
        </h1>

        <div className="space-y-6 text-lg text-unspent-text-body">
          <p>
            The best way to understand Bitcoin is to use it. That starts with "stacking sats"—collecting small amounts of Bitcoin, usually over the Lightning Network. A "sat" or "satoshi" is the smallest unit of Bitcoin, like a cent to a dollar.
          </p>

          <p>
            Don’t worry about perfection or going fully non-custodial right away. Just start. Download a Lightning wallet. Grab a Lightning Address. It’s like an email address for money. From there, you can earn and spend sats, tip creators, buy digital goods, and explore a global economy built on Bitcoin.
          </p>

          <h2 className="text-2xl font-semibold text-unspent-accent-secondary mt-8 mb-4">Why Stack Sats?</h2>
          <p>
            Stacking sats isn’t just about saving Bitcoin—it’s about learning by doing. Lightning is fast, cheap, and made for everyday transactions. You’ll get a feel for how Bitcoin works in practice, with real value moving at internet speed.
          </p>
          <p>
            It’s your on-ramp to the Bitcoin economy. No lectures. No pressure. Just start using it and see where it takes you.
          </p>

          <h2 className="text-2xl font-semibold text-unspent-accent-secondary mt-8 mb-4">Choose a Lightning Wallet</h2>
          <p>
            There are many great wallets to choose from. At this stage, it doesn’t matter if you go with a custodial or non-custodial wallet—just pick one and get started.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              <a href="https://blink.sv" className="text-unspent-accent-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                Blink
              </a>: Simple, mobile-friendly wallet with a strong community around real-world adoption.
            </li>
            <li>
              <a href="https://coinos.io" className="text-unspent-accent-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                Coinos
              </a>: A powerful web wallet that supports Lightning, Liquid, Ecash, and on-chain Bitcoin.
            </li>
            <li>
              <a href="https://walletofsatoshi.com" className="text-unspent-accent-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                Wallet of Satoshi
              </a>: A go-to for beginners—quick to set up and very easy to use.
            </li>
          </ul>

          <p>
            Once you’ve got a wallet, you can start earning sats through tips, bounties, or jobs—or spend sats on things like podcasts, digital art, or your favorite creators.
          </p>

          <p className="mt-8 border-t border-[var(--color-bg-secondary)] pt-6 text-unspent-text-secondary">
  This step is about putting Bitcoin to use. Get a feel for the tech. Make mistakes. Have fun. Once you’ve spent a few sats or received your first Lightning payment, you’ll never look at money the same way again.
</p>

<p className="text-unspent-text-body mt-6">
  When you're ready to secure your stack, <a href="/journey/saving-utxos" className="text-unspent-accent-primary underline">move it on-chain</a>. That’s when you start saving for real—holding UTXOs secured by your own hardware wallet. It’s a big milestone, and one of the most empowering things you can do.
</p>

        </div>
      </div>
    </div>
  );
}
