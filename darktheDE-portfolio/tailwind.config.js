/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#020617',        // Slate 950 (Premium Navy/Black)
        surface: {
          DEFAULT: '#0F172A',         // Slate 900
          light: '#1E293B',           // Slate 800
        },
        primary: '#10B981',           // Emerald 500
        secondary: '#3B82F6',         // Blue 500
        accent: '#34D399',            // Emerald 400
        card: 'rgba(15, 23, 42, 0.7)', // Slate 900 with glass opacity
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
          '0%': { boxShadow: '0 0 5px #10B981, 0 0 10px #10B981' },
          '100%': { boxShadow: '0 0 20px #10B981, 0 0 30px #10B981' },
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
