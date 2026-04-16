module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        panel: '#0c1728',
        line: 'rgba(148, 163, 184, 0.22)',
        mint: '#76e5c9',
        sky: '#83cfff',
        gold: '#ffd77a'
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['"Source Sans 3"', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 70px rgba(7, 17, 31, 0.35)'
      }
    }
  },
  plugins: []
};
