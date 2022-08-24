module.exports = {
  darkMode:"class",
  content:[
"./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        "big":"40rem"
      },
      screens:{
        sm:"600px",
        md:"800px",
        lg:"1024px",
        xl:"1280px",
      },

    },
    color:{
      "mycolor":"#555"
    },
    fontFamily:{
      nunito:['Nunito','sans-serif']
    }
  },
  plugins: [],
}