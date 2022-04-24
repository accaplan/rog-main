module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Karrik-Regular', 'sans-serif'],
      'mono': ['SelectricMono', 'Lucida Console', 'Courier', 'monospace'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        'black': '#93825e',
        'white': '#f9f5f3',
        'example-color': {
          light: '#ffb288',
          DEFAULT: '#d18d67',
          dark: '#ce8860',
        },
      }
    },
  },
  plugins: []
}