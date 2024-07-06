/** @type {import('tailwindcss').Config} */

// Products Flip
const plugin = require("tailwindcss/plugin")
const Productflip = plugin (function({ addUtilities }){
    addUtilities ({
        ".my-rotate-y-180" : {
            transform: "rotateY(180deg)",
            // transition: "transform 5s"
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
// Animate-CSS
// const AnimateCSS = require('animated-tailwindcss');
// module.exports = AnimateCSS()
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
      screens: { 'xs': { 'max': '640px' } },
      colors: {
        'ambition-text-color': '#ffe400',
      },
      backgroundImage:{
        // Homepage
        'home-bg':"url(assets/images/homepage-bg.jpg)",
        // Cepage Page
        'cepage-header-bg': "url(assets/images/cepage/header-bg-img.jpg)",
        'cepage-bg-img':"url(assets/images/page-bg.jpg)",
        'lemerlot-bg':"url(assets/images/le-merlot-bg.jpg)",
        'ugni-blanc-bg':"url(assets/images/ugni-blanc-bg.jpg)",
        'baco-bg':"url(assets/images/baco-bg.jpg)",
        'chardonnay-bg':"url(assets/images/chardonnay-bg.jpg)",
        'cepage-bg-odd':"url(assets/images/cepage-bg-odd-1.jpg)",
        'cepage-cabernet-icons' : "url(assets/images/cepage-cabernet.png)",
        'title-bg' : "url(assets/images/title-bg.png)",
        'caberbet-grapes' : "url(assets/images/carbanet-grapes.png)",
        // Ambition Page
        'ambition-header-bg': "url(assets/images/ambition/header-bg1.jpg)",
        'ambition-bg-odd':"url(assets/images/ambition-bg-odd.jpg)",
        'ambition-bg-even':"url(assets/images/ambition-bg-even.jpg)",
        // Product Page
        'armagnac-bg':"url(assets/images/armagnac-bg.jpg)",
        'cognac-bg':"url(assets/images/cognac-bg.jpg)",
        'xo-bg':"url(assets/images/xo-bg.jpg)",
        'bordueax-bg':"url(assets/images/bordueax-bg.jpg)",
        'saint-emilion-bg':"url(assets/images/saint-emilion-bg.jpg)",
        // Who we are
        'whoweare-bg':"url(assets/images/whoweare-bg.jpg)",
        // Products
        'products-header-bg':"url(assets/images/products/header-bg.jpg)",
      },
    },
  },
  plugins: [Productflip],
  
}

