module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#213f6f",
        "secondary-color": "#ffffff",
        "primary": "#434343",
        "secondary": "#ffffff",
      },
      backgroundImage: {
        "hero-desktop": "url('./assets/hero-bg.jpg')",
        "hero-mobile": "url('./assets/bg-header-mobile.png')",
      },
      fontFamily: {
        'helvetica': ['Helvetica', 'Arial', 'sans'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: "1440px",
          xl: "1440px",
          "2xl": "1440px",
        }
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',    
    }
  },
  plugins: [],
}

