// app/resources/page.tsx
import Link from 'next/link'

export default function ResourcesPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Resources</h1>
      <p className="mb-6">Download the latest slides and materials shared by Unspent Capital.</p>
      
      <ul className="list-disc list-inside">
        <li>
          <Link href="/slides/Unspent-Capital.m4a" target="_blank" className="text-blue-500 hover:underline">
            Introduction to Unspent Capital (Audio)
          </Link>
        </li>
        <li>
          <Link href="/slides/Unspent-Capital-Presentation.pdf" target="_blank" className="text-blue-500 hover:underline">
            Presentation Slides
          </Link>
        </li>
        <li>
          <Link href="/slides/Unspent-Capital.mp4" target="_blank" className="text-blue-500 hover:underline">
            Presentation Recording (Video)
          </Link>
        </li>
        {/* Add more resources here as needed */}
      </ul>
  <footer className="mt-12 w-full max-w-7xl border-t border-brand-blue-dark/60 pt-6 flex justify-center">
  <a
    href="/"
    className="px-6 py-3 bg-unspent-accent-primary text-unspent-text-on-accent rounded-lg font-semibold text-lg hover:bg-unspent-accent-primary-hover transition-all" // Updated button colors
  >
    Unspent Capital
  </a>
</footer>
    </main>
    
  );
}
