/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx,jsx}',
    './node_modules/shadcn-ui/**/*.{js,ts,jsx,tsx}',
	],
  plugins: [
    function ({addUtilities}){
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(0 0 0) white"
        },
        ".scrollbar-webkit" : {
          "&::-webkit-scrollbar" : {
            width: "8px"
          },
          "-webkit-scrollbar-track" : {
            background: "white"
          },
          "-webkit-scrollbar-thumb" : {
            backgroundColor: "rgb(31 41 55)",
            borderRadius: "20px",
            border: "1px solid white"
          }
        }
        
      }

      addUtilities(newUtilities, ["responsive", "hover"])

    }
  ],
}