/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#944E63',
        accent: '#B47B84',
        highlight: '#CAA6A6',
        background: '#FFE7E7',
        success: '#4CAF50',
        warning: '#FFC107',
        error: '#F44336',
        neutral: {
          50: '#F9F6F7',
          100: '#F5EFF0',
          200: '#E6DDE0',
          300: '#D7CBD0',
          400: '#B8A8AF',
          500: '#9A858E',
          600: '#7A6871',
          700: '#5D4D54',
          800: '#3F3438',
          900: '#201A1C',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      spacing: {
        '1': '0.25rem',  // 4px
        '2': '0.5rem',   // 8px
        '3': '0.75rem',  // 12px
        '4': '1rem',     // 16px
        '5': '1.25rem',  // 20px
        '6': '1.5rem',   // 24px
        '8': '2rem',     // 32px
        '10': '2.5rem',  // 40px
        '12': '3rem',    // 48px
        '16': '4rem',    // 64px
        '20': '5rem',    // 80px
        '24': '6rem',    // 96px
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};