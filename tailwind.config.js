/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
const Productflip = plugin (function({ addUtilities }){
    addUtilities ({
        ".my-rotate-y-180" : {
            transform: "rotateY(180deg)",
            // transform:" translate(-50%, -50%) scale(.5)",
          // transform: "scale(2)",
          // transition: "transform 20s cubic-bezier(0,.99,0,.99) 0s",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".perspective": {
          perspective: "2000px",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        }
    })
})
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily :{        
        Arka: ["Arka","cursive"], 
        Trojan: ["TrajanRegular","cursive"],
        Civilite:["Civilite", "cursive"],
      },
      colors: {
        'ambition-text-color': '#ffe400',
      },
      backgroundImage:{
        // Cepage Page
        'cepage-bg-img':"url(./src/assets/images/page-bg.jpg)",
        'lemerlot-bg':"url(./src/assets/images/le-merlot-bg.jpg)",
        'ugni-blanc-bg':"url(./src/assets/images/ugni-blanc-bg.jpg)",
        'baco-bg':"url(./src/assets/images/baco-bg.jpg)",
        'chardonnay-bg':"url(./src/assets/images/chardonnay-bg.jpg)",
        'cepage-bg-odd':"url(./src/assets/images/cepage-bg-odd-1.jpg)",
        'cepage-cabernet-icons' : "url(./src/assets/images/cepage-cabernet.png)",
        'title-bg' : "url(./src/assets/images/title-bg.png)",
        'caberbet-grapes' : "url(./src/assets/images/carbanet-grapes.png)",
        // Ambition Page
        'ambition-bg-odd':"url(./src/assets/images/ambition-bg-odd.jpg)",
        'ambition-bg-even':"url(./src/assets/images/ambition-bg-even.jpg)",
        // Product Page
        'armagnac-bg':"url(./src/assets/images/armagnac-bg.jpg)",
        'cognac-bg':"url(./src/assets/images/cognac-bg.jpg)",
        'xo-bg':"url(./src/assets/images/xo-bg.jpg)",
        'bordueax-bg':"url(./src/assets/images/bordueax-bg.jpg)",
        'saint-emilion-bg':"url(./src/assets/images/saint-emilion-bg.jpg)",
        // Who we are
        'whoweare-bg':"url(./src/assets/images/whoweare-bg.jpg)",
      },
    },
  },
  plugins: [Productflip],
  
}

