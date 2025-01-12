/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "rgb(129,118,175)",
        primary: "#343045",
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(90deg, rgba(129,118,175,1) 0%, rgba(192,183,232,1) 100%)",
        "footer-gradient":
          "linear-gradient(0deg, #343045, #C0B7E8 35%, #8176AF 69%, #343045 99%)",
        "radial-gradient":
          "radial-gradient(circle, rgba(64,58,95,1) 0%, rgba(33,30,46,1) 100%)",
      },
    },
  },
  plugins: [],
};
