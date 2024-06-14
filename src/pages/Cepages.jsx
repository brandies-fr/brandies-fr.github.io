// import React from 'react'
import React, { Component } from "react";
import Plx from "react-plx";
// import { Navbar } from '../components/Navbar'
// import product from "../assets/video/products.mp4"
export const Cepages = () => {
return (
<div>
   {/* 
   <Navbar />
   */}
   {/* 
   <video className='products-video'  autoPlay muted loop  >
      <source src={product} type="video/mp4" />
   </video>
   */}
   {/* Header Section */}
   <div className='bg-cepage-header-bg  w-full h-screen bg-cover bg-center bg-no-repeat  ' >
      <div className=' container  mx-auto  d-flex relative'>
         <Plx
         parallaxData={[
         {
         start: 0,
         end: 200,
         easing: "ease-in",
         properties: [
         {
         startValue: 1,
         endValue: -700,
         property: "translateX"          
         }
         ]
         }                                        
         ]}
         style={{ 
         position: "fixed",         
         width: "100%",
         zIndex: 100
         }}
         >
         <img className='absolute w-6/12    -left-80  top-1/4  '  src='../src/assets/images/cepage/tree.png' /> 
         </Plx> 
         <Plx
         parallaxData={[
         {
         start: 0,
         end: 250,
         easing: "ease-in",
         properties: [
         {
         startValue: 1,
         endValue: 0,
         property: "opacity"
         },
         {
         startValue: 0,
         endValue: 300,
         property: "translateX"
         }
         ]
         }
         ]}
         style={{
         position: "fixed",
         left: 0,
         top: "26vw",
         width: "100%"
         }}
         >
         <img className='absolute  w-4/12  h-auto end-36 '  src='../src/assets/images/cepage/title.png' /> 
         </Plx>               
      </div>
   </div>
   {/* Cabernet */}
   <div className='bg-cepage-bg-odd  w-full h-screen  bg-cover bg-center bg-no-repeat  overflow-hidden  ' >
      <div className='bg-cepage-cabernet-icons  w-full h-auto bg-cover  bg-center bg-no-repeat ' >
         <div className='container mx-auto p-5 text-center '>
            <div className="grid grid-cols-1 gap-8   md:grid-cols-2 ">
               <article class="text-wrap relative">
                  <div className=' grid grid-cols-1 gap-4  place-items-center  pt-36'>
                     <img className='  w-96 h-auto '  src='../src/assets/images/cabernet-title.png' />
                     <p className=' font-Trojan 
                        mb-3
                        w-9/12                                   
                        text-sm
                        font-bold 
                        dark:text-black-500  
                        first-line:tracking-widest 
                        first-letter:text-7xl 
                        first-letter:font-bold 
                        first-letter:text-black-900 
                        dark:first-letter:text-black-100 
                        first-letter:me-3 
                        first-letter:float-start 
                        text-justify'>
                        The illustrious grape variety often referred to as the 'King of Grapes' born in the Bordeaux region of France, 
                        where it thrives in the region's unique terroir. Its deep-rooted history showcases the profound connection between 
                        this grape and the country's winemaking legacy.
                     </p>
                     <p className=' font-Trojan 
                        mb-3
                        w-9/12                                   
                        text-sm
                        font-bold 
                        dark:text-black-500                                 
                        dark:first-letter:text-black-100                                   
                        text-justify'>
                        Cabernet Sauvignon's journey from Bordeaux to the world is a testament to France's vinicultural expertise. 
                        The grape's global popularity is a tribute to the country's enduring influence on wine culture. Its bold flavors 
                        and structured character are a reflection of the meticulous care taken by French vintners in their pursuit of perfection.
                     </p>
                  </div>
               </article>
               <div className=' grid grid-cols-1 gap-4 place-items-right pt-24 relative '>
                  <Plx
                  parallaxData={[
                  {
                  start: 0,
                  end: 600,
                  properties: [
                  {
                  startValue:0,
                  endValue:0,
                  property: "opacity"
                  }
                  ]
                  },
                  {
                  start: 300,
                  end: 600,
                  easing: "ease-in",
                  properties: [
                  {
                  startValue: 900,
                  endValue: 1,
                  property: "translateX"          
                  },
                  {
                  startValue:0,
                  endValue:1,
                  property: "opacity"
                  }
                  ]
                  }                                        
                  ]}
                  style={{
                  position: "absolute",         
                  width: "100%",
                  zIndex: 100,
                  top:"80px"
                  }}
                  >
                  <img className=' absolute w-full h-auto  md:w-11/12'  src='../src/assets/images/carbanet-grapes.png' />
                  </Plx>
               </div>
            </div>
         </div>
      </div>
   </div>
   {/* Le- Merlot */}
   <div className='bg-lemerlot-bg  w-full h-screen  bg-cover bg-center bg-no-repeat  z-10' >
      <div className='container mx-auto  text-center '>
         <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className=' grid grid-cols-1 place-items-left pt-5 relative'>
            <Plx
                  parallaxData={[
                  {
                  start: 0,
                  end: 600,
                  properties: [
                  {
                  startValue:0,
                  endValue:0,
                  property: "opacity"
                  }
                  ]
                  },
                  {
                  start: 600,
                  end: 1200,
                  easing: "ease-in",
                  properties: [
                  {
                  startValue: -900,
                  endValue: 1,
                  property: "translateX"          
                  },
                  {
                  startValue:0,
                  endValue:1,
                  property: "opacity"
                  }
                  ]
                  }                                        
                  ]}
                  style={{
                  position: "absolute",         
                  width: "100%",
                  zIndex: 100,
                  top:"80px"
                  }}
                  >
               <img className='absolute w-full h-auto md:w-11/12'  src='../src/assets/images/merlot-grapes.png' />
               </Plx>
            </div>
            <article class="text-wrap ">
               <div className=' grid grid-cols-1 gap-4  place-items-left  pt-20'>
                  <img className='w-96 h-auto '  src='../src/assets/images/lemerlot-title.png' />                                        
                  <p className=' font-Trojan 
                     mb-3
                     w-8/12                                   
                     text-sm
                     font-bold 
                     dark:text-black-500  
                     first-line:tracking-widest 
                     first-letter:text-7xl 
                     first-letter:font-bold 
                     first-letter:text-black-900 
                     dark:first-letter:text-black-100 
                     first-letter:me-3 
                     first-letter:float-start 
                     text-justify'>
                     If Merlot had a homeland, it would definitely be the Saint Emilion, Bordeaux region of France.
                     Its silky texture, luscious fruit flavors, and adaptability to various french regions make it a cherished gem in
                     French winemaking.
                  </p>
                  <p className=' font-Trojan 
                     mb-3
                     w-8/12                                   
                     text-sm
                     font-bold 
                     dark:text-black-500                                 
                     dark:first-letter:text-black-100                                   
                     text-justify'>
                     Its vibrant flavors and smooth finish reflect the passion and precision that define the french 
                     approach to crafting exceptional wines.
                  </p>
               </div>
            </article>
         </div>
      </div>
   </div>
   {/* Ugni-blanc */}
   <div className='bg-ugni-blanc-bg  w-full h-screen  bg-cover bg-center bg-no-repeat  ' >
      <div className='container mx-auto p-5 text-center '>
         <div className="grid grid-cols-1 gap-8   md:grid-cols-2 ">
            <article class="text-wrap ">
               <div className=' grid grid-cols-1 gap-4  place-items-center  pt-36'>
                  <img className='w-96 h-auto '  src='../src/assets/images/Ugni-Blanc-title.png' />                                        
                  <p className=' font-Trojan 
                     mb-3
                     w-9/12                                   
                     text-sm
                     font-bold 
                     dark:text-black-500  
                     first-line:tracking-widest 
                     first-letter:text-7xl 
                     first-letter:font-bold 
                     first-letter:text-black-900 
                     dark:first-letter:text-black-100 
                     first-letter:me-3 
                     first-letter:float-start 
                     text-justify'>
                     Renowned for its bright acidity and versatility, Ugni Blanc grape breed thrives in the sun-drenched vineyards 
                     of france, imparting a unique character to a range of french wines.
                  </p>
                  <p className=' font-Trojan 
                     mb-3
                     w-9/12                                   
                     text-sm
                     font-bold 
                     dark:text-black-500                                 
                     dark:first-letter:text-black-100                                   
                     text-justify'>
                     Ugni Blanc grapes are renowned for their high levels of natural acidity. 
                     This acidity lends a refreshing and crisp quality to the wines produced from this grape.
                  </p>
               </div>
            </article>
            <div className=' grid grid-cols-1 gap-4 place-items-right pt-20'>
               <img className='w-full h-auto md:w-11/12'  src='../src/assets/images/ugni-blanc-grapes.png' />
            </div>
         </div>
      </div>
   </div>
   {/* Baco */}
   <div className='bg-baco-bg  w-full h-screen  bg-cover bg-center bg-no-repeat  ' >
      <div className='container mx-auto  text-center '>
         <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className=' grid grid-cols-1 place-items-left pt-20'>
               <img className='w-full h-auto md:w-11/12'  src='../src/assets/images/baco-grapes.png' />
            </div>
            <article class="text-wrap ">
               <div className=' grid grid-cols-1 gap-4  place-items-left  pt-36'>
                  <img className='w-96 h-auto '  src='../src/assets/images/baco-title.png' />                                        
                  <p className=' font-Trojan 
                     mb-3
                     w-8/12                                   
                     text-sm
                     font-bold 
                     dark:text-black-500  
                     first-line:tracking-widest 
                     first-letter:text-7xl 
                     first-letter:font-bold 
                     first-letter:text-black-900 
                     dark:first-letter:text-black-100 
                     first-letter:me-3 
                     first-letter:float-start 
                     text-justify'>
                     Baco is a hybrid grape variety combining the best attributes of both its French and American parentage. 
                     Their deep color, intense fruitiness, pronounced tannins and remarkable aging potential contribute to the 
                     spirit's bold and complex profile.
                  </p>
               </div>
            </article>
         </div>
      </div>
   </div>
   {/*  Chardonnay */}
   <div className='bg-chardonnay-bg  w-full h-screen bg-cover bg-center bg-no-repeat  ' >
      <div className='container mx-auto p-5 text-center '>
         <div className="grid grid-cols-1 gap-8   md:grid-cols-2 ">
            <article class="text-wrap ">
               <div className=' grid grid-cols-1 gap-4  place-items-center  pt-36'>
                  <img className='w-96 h-auto '  src='../src/assets/images/chardonnay-title.png' />                                        
                  <p className=' font-Trojan 
                     mb-3
                     w-9/12                                   
                     text-sm
                     font-bold 
                     dark:text-black-500  
                     first-line:tracking-widest 
                     first-letter:text-7xl 
                     first-letter:font-bold 
                     first-letter:text-black-900 
                     dark:first-letter:text-black-100 
                     first-letter:me-3 
                     first-letter:float-start 
                     text-justify'>
                     Chardonnay is often referred to as the 'Queen of Grapes' due to its inherent elegance and adaptability.
                     It serves as the canvas for winemakers to craft a wide range of wine styles, 
                     from crisp and refreshing to rich and full-bodied.
                  </p>
                  <p className=' font-Trojan 
                     mb-3
                     w-9/12                                   
                     text-sm
                     font-bold 
                     dark:text-black-500                                 
                     dark:first-letter:text-black-100                                   
                     text-justify'>
                     Chardonnay is known for its fruit-forward character, offering notes of apple, pear, and citrus fruits. 
                     These fresh and lively flavors are often found in unoaked or lightly oaked Chardonnays.
                  </p>
               </div>
            </article>
            <div className=' grid grid-cols-1 gap-4 place-items-right pt-24'>
               <img className='w-full h-auto md:w-11/12'  src='../src/assets/images/chardonnay-grapes.png' />
            </div>
         </div>
      </div>
   </div>
</div>
)
}