/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'form': 'url("/images/formbg.png")',
        'input-field': 'url("/images/input-field.png")',
        'clouds': 'url("/images/clouds.png")',
        'bg-1': 'url("/images/bg-1.png")',
        'bg-2': 'url("/images/bg-2.png")',
        'bg-3': 'url("/images/bg-3.png")',
        'benefits': 'url("/images/benefits-bg.png")',
        'ground': 'url(/images/ground.png)',
      },
      width: {
        "540": "540px"
      },
      height: {
        "427": "427px"
      },
      fontFamily: {
        lilitaOneRegular: ["LilitaOneRegular", "sans-serif"],
        interBlack: ["InterBlack", "sans-serif"]
      },
      textColor: {
        "input": "#7F513D",
        "place-holder": "#AC8A63"
      }
    },
  },
  plugins: [],
};
