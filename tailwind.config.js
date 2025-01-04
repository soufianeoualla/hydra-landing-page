/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "rgb(129,118,175)", 
        primary:"#343045"
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(90deg, rgba(129,118,175,1) 0%, rgba(192,183,232,1) 100%)", 
      },
    },
  },
  plugins: [],
};
