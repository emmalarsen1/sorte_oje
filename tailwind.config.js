/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // Scanner alle relevante filer i src-mappen
    "./public/**/*.html", // Scanner filer i public-mappen (hvis nødvendigt)
  ],
  theme: {
    screens: {
      sm: "640px",
      //mobil/lille tablet => @media (min-width: 640px) { ... }

      md: "768px",
      // tablet => @media (min-width: 768px) { ... }

      lg: "1024px",
      // laptop => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // desktop => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // meget stor skærm => @media (min-width: 1536px) { ... }

      extend: {
        colors: {
          dark: "#1a1a1a", // Alternativ farve til mørke sektioner
          accent: "#f5deb3", // Lys beige farve til highlights
        },
      },
    },
    plugins: [],
  },
};
