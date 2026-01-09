import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        criv: {
          yellow: '#FCD34D',
          orange: '#FB923C',
          peach: '#FFB27D',
          lightpink: '#FFC4D6',
          mint: '#86EFAC',
          pink: '#F9A8D4',
          blue: '#3B82F6',
        },
        dark: '#050505',
      },
      fontFamily: {
        display: ['var(--font-syne)'],
        body: ['var(--font-manrope)'],
      },
    },
  },
  plugins: [],
};
export default config;