module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        skylrkBg: '#eaf6fb',
        skylrkCard: '#d6eaf8',
        skylrkAccent: '#b2e0e6',
        skylrkText: '#22223b',
      },
      fontFamily: {
        futuristic: ['"Orbitron"', 'sans-serif'],
        clean: ['"Inter"', 'sans-serif'],
      },
      blur: {
        xl: '40px',
      },
    },
  },
  plugins: [],
}; 