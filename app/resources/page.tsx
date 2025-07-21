// app/resources/page.tsx
import Link from 'next/link'

export default function ResourcesPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Resources</h1>
      <p className="mb-6">Download the latest slides and materials shared by Unspent Capital.</p>
      
      <ul className="list-disc list-inside">
        <li>
          <Link href="/slides/Unspent-Capital-Presentation.pdf" target="_blank" className="text-blue-500 hover:underline">
            Presentation Slides (PDF)
          </Link>
        </li>
        <li>
          <Link href="/slides/Unspent-Capital.mp4" target="_blank" className="text-blue-500 hover:underline">
            Presentation Recording (MP4)
          </Link>
        </li>
        {/* Add more resources here as needed */}
      </ul>
    </main>
  );
}
