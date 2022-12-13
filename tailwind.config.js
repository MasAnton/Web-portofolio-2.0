/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        gelap: "#01141A",
        biru: "#2FC3FF",
        putih: "#FFFFFF",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
