module.exports = {
  theme: {
    screens: {
      'sm': '500px',
      'md': '900px',
      'lg': '1100px',
      'xl': '1300px',
      '2xl': '1500px',
      '3xl': '1700px',
      '4xl': '1900px',
      '5xl': '2100px',
    },
    extend: {
      gridTemplateColumns: {
        'playlists-mobile': 'repeat(auto-fill, minmax(208px, 1fr))',
        'playlists-tablet': 'repeat(auto-fill, minmax(266px, 1fr))',
        'playlists-desktop': 'repeat(auto-fill, minmax(180px, 1fr))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
