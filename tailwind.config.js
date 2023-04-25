/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        primary: {
          300: '#61879D',
          500: '#446070', 
        }, 
        secondary: '#A27A3A',
        'color-swatch': {
          100: '#AED4DA', 
          200: '#76B4DD',
          300: '#BEC4ED'
        },
        'semi-white': '#F5F4F4',
        'washed-white': '#FAF7F6',
      }, 
      dropShadow: {
        'xl': '0.1875rem 0.3125rem 0.25rem rgba(0, 0, 0, 0.2);'
      },
      fontSize: {
        sm: ['16px', '20px'],
        md: ['20px', '25px'],
        lg: ['20px', '41px'],
        xl: ['64px', {
          lineHeight: '105px', 
          letterSpacing: '0.1em', 
          fontWeight: '400'
        }], 
        xxl: ['130px', {
          lineHeight:  '214px', 
          letterSpacing: '0.06em',
          fontWeight: '400'
        }]
      }
    },
  },
  plugins: [],
}

