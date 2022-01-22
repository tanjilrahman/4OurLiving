module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      header: ['Oswald', 'ui-sans-serif'],
      display: [ 'Playfair Display', 'ui-serif'],
      body: ['Niramit', 'system-ui'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#F55539',
        secondary: '#EEEBE6',
        light_secondary: '#F6F5F3',
        light_2x_secondary: '#F8F8F8',
        black: '#17110F',
        dark: '#4B3F3B',
      },
    }
  },
  plugins: [],
}