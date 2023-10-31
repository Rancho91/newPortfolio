/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './componentes/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        celeste: {
          background: '#49ab7f',
          hover: '#369b6d',
          light: '#E3EDE9',
          back:'#29342F',
          backLight:'#7FA292'
        },
        salmon: {
          'background': '#FF7E1799'
        }
      },
      
      
    },
  },
  plugins: [],
}
