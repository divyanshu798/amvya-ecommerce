/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sage': {
          50: '#f6f7f6',
          100: '#e3e6e3',
          200: '#c6ccc6',
          300: '#a1aa9f',
          400: '#7a8576',
          500: '#5c6b58',
          600: '#475544',
          700: '#3a4437',
          800: '#303830',
          900: '#292f28',
        },
        'warm-gray': {
          50: '#faf9f7',
          100: '#f2f0eb',
          200: '#e8e4db',
          300: '#d9d2c4',
          400: '#c7bca8',
          500: '#b5a08b',
          600: '#a18970',
          700: '#87725c',
          800: '#6f5f4e',
          900: '#5c4f41',
        },
        'cream': {
          50: '#fefdfb',
          100: '#fdf9f0',
          200: '#fbf2e0',
          300: '#f7e7c4',
          400: '#f1d59f',
          500: '#e8be77',
          600: '#dba655',
          700: '#bb8842',
          800: '#976e38',
          900: '#7a5a30',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Crimson Text', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}