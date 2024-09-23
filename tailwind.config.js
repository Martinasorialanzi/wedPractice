/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inika: ['Inika', 'serif'],
        dancing: ['Dancing_Script'], 
      },
      colors: {
        buttonBg: '#5E5E5E',
        buttonHover: '#4a4a4a',
        buttonText: '#ffffff',
        textPrimary: '#5E5E5E',
      },
    },
  },
  plugins: [],
};
