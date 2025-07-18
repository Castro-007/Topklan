/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
  			sma: {
  				max: '429px'
  			},
  			mda: {
  				min: '430px',
  				max: '767px'
  			},
  			mdaa: {
  				min: '768px',
  				max: '820px'
  			}
  		},
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        slideInRight: 'slideInRight 0.5s ease-in-out',
        slideInLeft: 'slideInLeft 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
}

