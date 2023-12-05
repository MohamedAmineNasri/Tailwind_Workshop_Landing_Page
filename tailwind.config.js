/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    // *./src/*/*.{html,js}*
  ],
  theme: {
    extend: {
      colors: {
        'primary' :'#314584',
        'secondary':'#ff3946',
        'tertiary':'#6e757a'
      },
      fontFamily: {
        body: ['work Sans']
      },
      fontSize: {
        navSize: "24px",
        textSize: "18px",
        titleSize: "45px",
        heroSize:"74px"
      }
    },
  },
  plugins: [],
};
