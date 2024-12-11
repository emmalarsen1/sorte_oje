/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // Scanner alle relevante filer i src-mappen
    "./public/**/*.html", // Scanner filer i public-mappen (hvis nødvendigt)
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1a1a1a", // Alternativ farve til mørke sektioner
        accent: "#f5deb3", // Lys beige farve til highlights
      },
      spacing: {
        128: "32rem", // Custom spacing hvis nødvendigt
      },
    },
  },
  plugins: [],
};
