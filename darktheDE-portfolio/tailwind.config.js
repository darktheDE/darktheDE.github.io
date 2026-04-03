/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',        // True OLED Black
        surface: {
          DEFAULT: '#0A0A0A',         // Elevated surface
          light: '#111111',           // Cards & panels
        },
        primary: '#10B981',           // Emerald 500 (main accent)
        secondary: '#059669',         // Emerald 600
        accent: '#34D399',            // Emerald 400
        card: 'rgba(10, 10, 10, 0.6)', // Dark card with opacity
        text: {
          light: '#E8ECF0',           // Soft white (less harsh)
          muted: '#6B7A8D',           // Slate muted
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
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
