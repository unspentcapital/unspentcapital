import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unspent.capital"), // Make sure to use your actual domain
  title: "Unspent Capital",
  description: "Exploring the philosophy of Bitcoin as unspent capital and showcasing projects built with spent capital.",
  openGraph: {
    title: "Unspent Capital",
    description: "Exploring the philosophy of Bitcoin as unspent capital and showcasing projects built with spent capital.",
    images: [
      {
        url: "/og-image.png", // Path to your image in the `public` folder
        width: 1200,
        height: 630,
        alt: "Unspent Capital",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unspent Capital",
    description: "Exploring the philosophy of Bitcoin as unspent capital and showcasing projects built with spent capital.",
    images: ["/og-image.png"], // Path to your image in the `public` folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="py-4 shadow-md bg-gradient-to-b from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)] border-b border-[var(--color-bg-secondary)]">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <Link href="/" className="text-2xl font-bold text-unspent-accent-primary hover:text-unspent-accent-primary-hover transition-colors">
              Unspent Capital
            </Link>
            {/* You can add other global navigation links here if needed */}
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
