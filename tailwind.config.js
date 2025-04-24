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
        "hero-sm": "url('./assets/images/hero-bg-sm.jpg')",
        "hero-md": "url('./assets/images/hero-bg-md.jpg')",
        "hero-lg": "url('./assets/images/hero-bg-lg.jpg')",
        "hero-xl": "url('./assets/images/hero-bg-xl.jpg')",
        "hero-2xl": "url('./assets/images/hero-bg-2xl.jpg')",
        "faq-gradient": "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./assets/images/sarah-faq.jpg')",
        "faq-gradient-sm": "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./assets/images/sarah-faq-sm.jpg')",
        "faq-gradient-md": "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./assets/images/sarah-faq-md.jpg')"
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
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

