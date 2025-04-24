module.exports = {
  content: ["./*.html"],
  safelist: ['bg-hero-sm', 'bg-hero-md', 'bg-hero-lg', 'bg-hero-xl', 'bg-hero-2xl'],
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
        "hero-2xl": "url('./assets/images/hero-bg-2xl.jpg')"
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

