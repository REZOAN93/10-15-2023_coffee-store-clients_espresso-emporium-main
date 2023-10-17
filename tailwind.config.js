/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        basicColor: "#D2B48C",
        bgAll: "var(--Dark-07, #F3F3F3)",
        bgBtn: "#331A15",
        bgCard: "#F4F3F0",
        readMore: "#FF8C47",
        backBtn: "#D72050",
        coverBtn: "#E3B577",
        bgColor: "#ECEAE3",
      },
      fontFamily: {
        basicFont: "'Raleway', sans-serif",
        titleFont: "'Rancho', cursive",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/more/11.png')",
        "cover-pattern": "url('/src/assets/more/3.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      height: {
        128: "800px",
      },
    },
  },
  plugins: [require("daisyui")],
};
