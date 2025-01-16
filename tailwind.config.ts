import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'custom': 'polygon(0 0, 100% 0, 90% 100%, 0%)]'
      },
      backgroundImage: {
        'hero-pattern': "url('../public/images/background-3.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        nobile: ['Nobile', 'sans-serif'], // Add your custom font family
        noto: ['NotoSans', 'sans-serif'], // Add your custom font family
      },
    },
  },
  plugins: [],
} satisfies Config;
