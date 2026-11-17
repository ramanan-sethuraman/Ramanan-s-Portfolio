/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          light: '#E2E2E2',
          card: '#ECECEC',
          dark: '#0A0A0A',
          border: '#000000',
          textMuted: '#6B7280',
          textPrimary: '#111827',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widestHeader: '0.28em',
      }
    },
  },
  plugins: [],
}
