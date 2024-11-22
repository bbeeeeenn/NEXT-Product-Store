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
            textclr: "rgba(var(--text-clr))",
            background: "rgba(var(--background-clr))",
            secondary: "rgba(var(--secondary-clr))",
            edit: "rgba(var(--edit-btn-clr))",
            delete: "rgba(var(--delete-btn-clr))",
            input: "rgba(var(--input-clr))",
         },
      },
   },
   plugins: [
      ({ addUtilities }) => {
         addUtilities({
            ".bg-clip-text": {
               "-webkit-background-clip": "text",
            },
         });
      },
   ],
} satisfies Config;
