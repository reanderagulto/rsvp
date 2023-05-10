/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
    },

    screens: {
      xxxs: '375px',
      xxs: '400px',
      xs: '427px',
      sm: '640px',
      md: '768px',
      lg: '1440px',
      xl: '1600px',
    },

    extend: {
      colors: {  
        primary: {
          100: '#61879D',
          200: '#446070', 
        }, 
        secondary: '#A27A3A',
        'color-swatch': {
          100: '#AED4DA', 
          200: '#76B4DD',
          300: '#BEC4ED'
        },
        white: {
          200: '#F5F4F4',
          300: '#FAF7F6'
        },
      },

      fontFamily: {
        primary: ['OpenSauce', 'sans-serif'],
        secondary: ['TANAngelton', 'sans-serif'],
        heading: ['Gistesy', 'sans-serif']
      },

      dropShadow: {
        'xl': '0.1875rem 0.3125rem 0.25rem rgba(0, 0, 0, 0.2)',
        'xxl': '0.3125rem 0.375rem 0.25rem rgba(0, 0, 0, 0.25)'
      },

      fontSize: {
        xsm: ['1rem', '1.25rem'],
        sm: ['1.5rem', {
          lineHeight: '2.875rem', 
          letterSpacing: '0.04em',
          fontWeight: '400'
        }],
        md: ['1.25rem', '1.5625rem'],
        lg: ['1.25rem', '2.5625rem'],
        xl: ['4rem', {
          lineHeight: '6.5625rem', 
          letterSpacing: '0.1em', 
          fontWeight: '400'
        }], 
        xxl: ['8.125rem', {
          lineHeight:  '13.375rem', 
          letterSpacing: '0.06em',
          fontWeight: '400'
        }]
      },

      borderRadius: {
        sm: '0.5rem',
        md: '0.625rem',
        lg: '50%',
      }, 


    },
  },
  plugins: [],
}

