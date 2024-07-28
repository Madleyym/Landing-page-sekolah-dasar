import type { Config } from "tailwindcss";
// @ts-ignore
import textShadow from 'tailwindcss-textshadow';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#E8F5FC', // Menambahkan warna khusus
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))", // Gradient radial
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))", // Gradient konik
      },
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)', // Bayangan teks kecil
        'md': '2px 2px 4px rgba(0, 0, 0, 0.5)', // Bayangan teks medium
        'lg': '4px 4px 6px rgba(0, 0, 0, 0.5)', // Bayangan teks besar
        'white': '0 4px 6px rgba(255, 255, 255, 0.3), 0 1px 3px rgba(255, 255, 255, 0.1)', // Bayangan putih
      },
    },
  },
  plugins: [
    textShadow, // Menambahkan plugin text-shadow
  ],
};

export default config;
