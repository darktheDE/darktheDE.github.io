/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#090D16',        // Deloitte Dark Executive (#090D16)
        surface: {
          DEFAULT: '#0F172A',         // Slate 900
          light: '#1E293B',           // Slate 800
        },
        primary: '#86BC25',           // Deloitte Iconic Green (#86BC25)
        secondary: '#046A38',         // Deloitte Deep Green (#046A38)
        accent: '#26890D',            // Deloitte Mid Green (#26890D)
        deloitte: {
          green: '#86BC25',
          deep: '#046A38',
          mid: '#26890D',
          dark: '#1C3D26',
        },
        card: 'rgba(15, 23, 42, 0.75)', // Slate 900 with glass opacity
        text: {
          light: '#F8FAFC',           // Slate 50
          muted: '#94A3B8',           // Slate 400
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },

      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #86BC25, 0 0 10px #86BC25' },
          '100%': { boxShadow: '0 0 20px #86BC25, 0 0 30px #86BC25' },
        }
      }
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.text-glow': {
          textShadow: `0 0 10px ${theme('colors.primary')}, 0 0 20px ${theme('colors.primary')}`,
        },
        '.text-glow-light': {
          textShadow: `0 0 5px ${theme('colors.primary')}`,
        },
        '.box-glow': {
          boxShadow: `0 0 15px ${theme('colors.primary')}`,
        }
      }
      addUtilities(newUtilities)
    }
  ],
}
