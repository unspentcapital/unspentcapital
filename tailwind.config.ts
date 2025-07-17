/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'unspent-bg-primary': 'var(--color-bg-primary)',
        'unspent-bg-secondary': 'var(--color-bg-secondary)',
        'unspent-text-heading': 'var(--color-text-heading)',
        'unspent-text-body': 'var(--color-text-body)',
        'unspent-text-on-accent': 'var(--color-text-on-accent)',
        'unspent-accent-primary': 'var(--color-accent-primary)',
        'unspent-accent-primary-hover': 'var(--color-accent-primary-hover)',
        'unspent-accent-secondary': 'var(--color-accent-secondary)',
        'unspent-accent-secondary-hover': 'var(--color-accent-secondary-hover)',
        // Any old, conflicting color definitions that were here previously
        // should be removed if they are fully replaced by the 'unspent-*' palette.
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};
