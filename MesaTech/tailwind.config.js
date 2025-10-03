/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Importante para o Vite
    "./src/**/*.{js,ts,jsx,tsx}", // AQUI ESTÁ O PONTO-CHAVE!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}