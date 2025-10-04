/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Dark Theme Colors
        dark: {
          primary: '#0F0F0F',
          secondary: '#1A1A1A', 
          tertiary: '#252525',
          card: '#2A2A2A',
        },
        accent: {
          blue: '#1E3A8A',
          'blue-light': '#1E40AF',
          purple: '#6B21A8',
          'purple-light': '#7C3AED',
          indigo: '#312E81',
          'indigo-light': '#3730A3',
        }
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(135deg, #0F0F0F 0%, #1E3A8A 50%, #6B21A8 100%)',
        'dark-card': 'linear-gradient(145deg, #252525 0%, #2A2A2A 100%)',
        'accent-gradient': 'linear-gradient(90deg, #1E3A8A 0%, #6B21A8 50%, #7C3AED 100%)',
      },
      boxShadow: {
        'dark-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
        'glow-purple': '0 0 20px rgba(124, 58, 237, 0.3)',
        'glow-blue': '0 0 20px rgba(30, 64, 175, 0.3)',
      }
    },
  },
  plugins: [],
}

