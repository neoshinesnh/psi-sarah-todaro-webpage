module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "my-blue": "#173159",
        "my-gray": "#434343",
        "my-tan": "#a5866c",
      },
      backgroundImage: {
        "hero-sm": "url('./assets/images/hero-bg-sm.webp')",
        "hero-md": "url('./assets/images/hero-bg-md.webp')",
        "hero-lg": "url('./assets/images/2x1.webp')",
        "hero-xl": "url('./assets/images/2x1.webp')",
        "hero-2xl": "url('./assets/images/2x1.webp')",
        "faq-gradient": "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./assets/images/sarah-faq.webp')",
        "faq-gradient-sm": "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./assets/images/sarah-faq-sm.webp')",
        "faq-gradient-md": "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./assets/images/sarah-faq-md.webp')"
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

