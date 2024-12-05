/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       boxShadow: {
        neumorphic: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff',
        'neumorphic-hover': '4px 4px 8px #bebebe, -4px -4px 8px #ffffff',
        'neumorphic-inset': 'inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff',
      },
      colors: {
        'soft-gray': '#f0f0f3',
      },
    },
  },
  plugins: [],
}

