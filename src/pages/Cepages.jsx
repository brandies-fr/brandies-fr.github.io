// import React from 'react'
import React, { Component } from "react";
import Plx from "react-plx";
import HamburgerMenu from '../components/HamburgerMenu';
import BrochureIcon from "../components/BrochureIcon";
// import { HeaderIcons } from '../components/HeaderIcons';
import tree from '../assets/images/cepage/tree1.png';
import cepageTitle from '../assets/images/cepage/title.png';
import cabernetTitle from '../assets/images/cabernet-title.png';
import cabernetGrapes from '../assets/images/carbanet-grapes.png';
import merlotGrapes from '../assets/images/merlot-grapes.png';
import merlotTitle from '../assets/images/lemerlot-title.png'
import ugniblancTitle from '../assets/images/Ugni-Blanc-title.png';
import ugniblancGrapes from '../assets/images/ugni-blanc-grapes.png';
import bacoTitle from '../assets/images/baco-title.png';
import bacoGrapes from '../assets/images/baco-grapes.png';
import chardonnayTitle from '../assets/images/chardonnay-title.png';
import chardonnayGrapes from '../assets/images/chardonnay-grapes.png';

export const Cepages = () => {
return (
<div>
   {/* <HeaderIcons/> */}
<HamburgerMenu/>
<BrochureIcon/>
<div className='bg-cepage-header-bg  w-full h-screen  bg-cover bg-center bg-no-repeat  overflow-hidden' >
        <div className='  relative h-full flex justify-between items-end top-12'>        
          <Plx
      parallaxData={[
        {
          start: 0,
          end: 200,
          easing: "ease-in",
          properties: [
            {
              startValue: 0,
              endValue: -700,
              property: "translateX"
            }
          ]
        }
      ]}
      style={{
        position: "relative",
        width: "100%",
        zIndex: 100,
      }}
    >

       <div className="relative  right- 4/6 transform -translate-x-1/2     xs:w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12">
        <img className="w-full  " src={tree} alt="Tree" />
      </div>
      </Plx>
      <Plx
            parallaxData={[
              {
                start: 0,
                end: 300,
                easing: "ease-in",
                properties: [
                  {
                    startValue: 1,
                    endValue: 800,
                    property: "translateX"          
                  }
                ]
              }                                        
            ]}
            style={{
              position: "absolute",
              width: "100%",
              zIndex: 100,
            }}
>
<div className="flex justify-center items-center h-screen">
  <img className="absolute right-1/4 xs:w-8/12 sm:w-8/12 md:w-6/12 lg:w-4/12" src={cepageTitle} alt="Ambition Title" />
</div>
</Plx>
  </div>
</div>

   {/* Cabernet */}
   {/* <div className='bg-cepage-bg-odd  w-full md:h-full  lg:h-full  xl:h-screen  bg-cover bg-center bg-no-repeat bg-blend-darken  ' >
      <div className='bg-cepage-cabernet-icons  w-full h-auto bg-cover  bg-center bg-no-repeat ' >
         <div className='container mx-auto p-5 text-center '>
            <div className="grid grid-cols-1 gap-8   md:grid-cols-2 ">
               <article class="text-wrap relative">
                  <div className=' grid grid-cols-1 gap-4  place-items-center  pt-36'>
                     <img className='  w-96 h-auto '  src={cabernetTitle}/>
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
                 
                  <img className=' w-full h-auto  md:w-11/12'  src={cabernetGrapes} />
                  
               </div>
            </div>
         </div>
      </div>
   </div> */}
   <div className='bg-cepage-bg-odd w-full md:h-full lg:h-full xl:h-screen bg-cover bg-center bg-no-repeat bg-blend-darken'>
  <div className='bg-cepage-cabernet-icons w-full h-auto bg-cover bg-center bg-no-repeat'>
    <div className='container mx-auto p-5 text-center'>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <article class="text-wrap relative">
          <div className='grid grid-cols-1 gap-4 place-items-center pt-36'>
            <img className='w-96 h-auto' src={cabernetTitle} alt="Cabernet Title" />
            <p className='font-Trojan mb-3 w-9/12 text-sm font-bold dark:text-black-500 first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-black-900 dark:first-letter:text-black-100 first-letter:me-3 first-letter:float-start text-justify'>
              The illustrious grape variety often referred to as the 'King of Grapes' born in the Bordeaux region of France, where it thrives in the region's unique terroir. Its deep-rooted history showcases the profound connection between this grape and the country's winemaking legacy.
            </p>
            <p className='font-Trojan mb-3 w-9/12 text-sm font-bold dark:text-black-500 dark:first-letter:text-black-100 text-justify'>
              Cabernet Sauvignon's journey from Bordeaux to the world is a testament to France's vinicultural expertise. The grape's global popularity is a tribute to the country's enduring influence on wine culture. Its bold flavors and structured character are a reflection of the meticulous care taken by French vintners in their pursuit of perfection.
            </p>
          </div>
        </article>
        <div className='grid grid-cols-1 gap-4 place-items-right pt-24 relative'>
          <img className='w-full h-auto md:w-11/12' src={cabernetGrapes} alt="Cabernet Grapes" />
        </div>
      </div>
    </div>
  </div>
</div>

   {/* Le- Merlot */}
   <div className='bg-lemerlot-bg w-full  md:h-full  lg:h-full  xl:h-screen bg-cover bg-center bg-no-repeat bg-blend-darken' >
      <div className='container mx-auto  text-center pt-10 '>
         <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className=' grid grid-cols-1  lg: place-items-center pt-5 relative'>            
               <img className=' w-full h-auto md:w-11/12'  src={merlotGrapes} />             
            </div>
            <article class="text-wrap ">
               <div className=' grid grid-cols-1 gap-4   place-items-center   pt-20'>
                  <img className='w-96 h-auto '  src={merlotTitle} />                                        
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
   <div className='bg-ugni-blanc-bg   w-full md:h-full  lg:h-full  xl:h-screen  bg-cover bg-center bg-no-repeat  ' >
      <div className='container mx-auto p-5 text-center '>
         <div className="grid grid-cols-1 gap-8   md:grid-cols-2 ">
            <article class="text-wrap ">
               <div className=' grid grid-cols-1 gap-4  place-items-center  pt-36'>
                  <img className='w-96 h-auto md:w-11/12 '  src={ugniblancTitle} />                                        
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
               <img className='w-full h-auto md:w-11/12'  src={ugniblancGrapes} />
            </div>
         </div>
      </div>
   </div>
   {/* Baco */}
   <div className='bg-baco-bg   w-full md:h-full  lg:h-full  xl:h-screen  bg-cover bg-center bg-no-repeat  ' >
      <div className='container mx-auto  text-center '>
         <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className=' grid grid-cols-1 place-items-center pt-20'>
               <img className='w-full h-auto md:w-11/12'  src={bacoGrapes} />
            </div>
            <article class="text-wrap ">
               <div className=' grid grid-cols-1 gap-4  place-items-center  pt-36'>
                  <img className='w-96 h-auto '  src={bacoTitle} />                                        
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
   <div className='bg-chardonnay-bg  w-full  md:h-full  lg:h-full  xl:h-screen  bg-cover bg-center bg-no-repeat  ' >
      <div className='container mx-auto p-5 text-center '>
         <div className="grid grid-cols-1 gap-8   md:grid-cols-2 ">
            <article class="text-wrap ">
               <div className=' grid grid-cols-1 gap-4  place-items-center  pt-36'>
                  <img className='w-96 h-auto '  src={chardonnayTitle} />                                        
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
            <div className=' grid grid-cols-1 gap-4 place-items-center pt-24'>
               <img className='w-full h-auto md:w-11/12'  src={chardonnayGrapes} />
            </div>
         </div>
      </div>
   </div>
</div>
)
}
export default Cepages;