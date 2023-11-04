module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand_background: "#F8FCFF",
        brand_orange: "#FDAF01",
        brand_blue: "#A7E1F5",
        brand_green_soft: "#70D096",
        brand_red: "#FB4F6E",
        brand_green: "#008D43",
        brand_blue2: "#A5E1F9",
        brand_red2: "#EE5B6E",
        dark_background: "#252525",
      },
    },
  },
  plugins: [require("daisyui")],
}