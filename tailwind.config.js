/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "my-white": "#f9f9f9", // Replace '#f9f9f9' with your desired white color code.
        "my-beige": "#e7d9bf", // Replace '#f9f9f9' with your desired white color code.
      },
    },
  },
  plugins: [],
};
