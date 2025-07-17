export default function SavingUtxosPage() {
  return (
    <div className="min-h-screen bg-unspent-bg-primary text-unspent-text-body py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-unspent-accent-primary mb-8 text-center">
          Saving UTXOs: Secure Your Stack
        </h1>

        <div className="space-y-6 text-lg text-unspent-text-body">
          <p>
            Once you’ve stacked a meaningful amount of sats, it’s time to take the next step: <strong>move it on-chain and hold the keys yourself</strong>. This is where Bitcoin stops being something you just use—and becomes something you truly own.
          </p>

          <p>
            That means withdrawing from custodial wallets or exchanges into your own self-custodial wallet, ideally secured by a hardware device. You’re no longer relying on someone else to hold your money. You’re taking responsibility—and with it, sovereignty.
          </p>

          <h2 className="text-2xl font-semibold text-unspent-accent-secondary mt-8 mb-4">What Are UTXOs?</h2>
          <p>
            In technical terms, what you’re holding are <strong>UTXOs</strong>—Unspent Transaction Outputs. Think of each UTXO like a digital coin with its own denomination. When you receive Bitcoin, it's recorded as one or more UTXOs locked to your wallet address.
          </p>
          <p>
            To spend them, you need the <strong>private keys</strong> that unlock them. And when you control the keys, no one else—not a bank, government, or platform—can stop you from spending your Bitcoin. That’s the heart of self-custody: “<em>Not your keys, not your coins.</em>”
          </p>

          <h2 className="text-2xl font-semibold text-unspent-accent-secondary mt-8 mb-4">Use a Hardware Wallet</h2>
          <p>
            For meaningful savings, use a <strong>hardware wallet</strong> to secure your private keys offline. This dramatically reduces the risk of theft, malware, or phishing attacks.
          </p>

          <p>Trusted options include:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              <a href="https://blockstream.com/jade/" className="text-unspent-accent-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                Blockstream Jade
              </a>
            </li>
            <li>
              <a href="https://coldcard.com/" className="text-unspent-accent-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                Coinkite Coldcard
              </a>
            </li>
          </ul>

          <p>
            When you set one up, you’ll be given a seed phrase (12 or 24 words). This is your recovery key. Back it up—<strong>on paper or steel, never online</strong>—and keep it somewhere safe and secret.
          </p>

          <p className="mt-8 border-t border-[var(--color-bg-secondary)] pt-6 text-unspent-text-secondary">
            This is the moment you graduate from user to sovereign. Saving UTXOs means saving Bitcoin on your own terms. No intermediaries. No counterparty risk. Just you and your keys. This is Bitcoin at its fullest potential.
          </p>

          <p className="text-unspent-text-body mt-6">
            Want to go even deeper? <a href="/journey/multi-sig-security" className="text-unspent-accent-primary underline">Explore multisig wallets</a>—a powerful next step in self-custody for large balances or shared responsibility.
          </p>
        </div>
      </div>
    </div>
  );
}
