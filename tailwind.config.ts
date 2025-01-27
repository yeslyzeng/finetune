import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        "primary-hover": "var(--primary-hover)",
        "secondary-background": "var(--secondary-background)",
      },
      width: {
        '4/10': '40%',
        '6/10': '60%',
      },
      backgroundColor: {
        'primary': 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        'secondary': 'var(--secondary-background)',
      },
      textColor: {
        'primary': 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
      },
      borderColor: {
        'primary': 'var(--primary)',
      }
    },
  },
  plugins: [],
} satisfies Config;
