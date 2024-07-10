// import React from 'react'
import React, { useState, useEffect } from "react";
import HamburgerMenu from '../components/HamburgerMenu';
import { useInView } from "react-intersection-observer";
// import { HeaderIcons } from '../components/HeaderIcons';
import Plx from "react-plx";
import drum from '../assets/images/products/drum.png';
import productTitle from '../assets/images/products/title.png';
import armagnacBlur from '../assets/images/armagnac-blur.png';
import armagnacBottle1 from '../assets/images/armagnac-bottle1.png'
import marie from '../assets/images/marie-img.png';
import cognacBlur from '../assets/images/cognac-blur.png';
import cognacBottle1 from '../assets/images/cognac-bottle1.png';
import xoBlur from '../assets/images/xo-blur.png';
import xoBottle1 from '../assets/images/xo-bottle1.png';
import borduexBlur from '../assets/images/bordeaux-blur.png';
import borduexWine1 from '../assets/images/bordeaux-bottle1.png'
import saintemilionBlur from '../assets/images/saint-emilion-blur.png';
import saintemilionBottle1 from '../assets/images/saint-emilion-bottle1.png';
import legrand from '../assets/images/legrand-img.png';
import lafeyetee from '../assets/images/lafeyette-img.png';
import jaques from '../assets/images/jaques-img.png';
import marieTherese from '../assets/images/marie-therese.png';
import armagnacBg from '../assets/images/armagnac-bg.jpg';
import armagnacbgRes from '../assets/images/armagnac-bg-responsive.jpg'
import cognacbg from'../assets/images/cognac-bg.jpg';
import cognacbgRes from '../assets/images/bg-cognac-responsive.jpg';
import bordeauxBg from '../assets/images/bordueax-bg.jpg';
import bordeauxbgRes from '../assets/images/bg-bordeaux-responsive.jpg';
import xoBg from '../assets/images/xo-bg.jpg';
import xobgRes from '../assets/images/xo-bg-responsive.jpg';
import saintBg from '../assets/images/saint-emilion-bg.jpg' ;
import saintbgRes from '../assets/images/saint-bg-responsive.jpg';
import armagnacTitle from '../assets/images/armagnac-title.png';
import cognacTitle from '../assets/images/cognac-title.png';
import xoTitle from '../assets/images/xobrandies-title.png';
import bordeauxTitle from '../assets/images/bordeaux-title.png';
import saintemillionTitle from '../assets/images/saintemillion-title.png'


export const Products = () => {
  const { ref: div1, inView: div1Inview,  } = useInView({
    /* Optional options */
    threshold: 0.6,
  });
  const { ref: div2, inView: div2Inview,  } = useInView({
    /* Optional options */
    threshold: 0.7,
  });
  const { ref: div3, inView: div3Inview,  } = useInView({
    /* Optional options */
    threshold: 0.8,
  });
  const { ref: div4, inView: div4Inview,  } = useInView({
    /* Optional options */
    threshold: 0.9,
  });
  const { ref: div5, inView: div5Inview,  } = useInView({
    /* Optional options */
    threshold: 0.9,
  });
  
  return (
    <div>
      <HamburgerMenu/>
      
      {/* <HeaderIcons/> */}
    {/* <Navbar /> */}
        {/* Header Section */}
        <div className='bg-products-header-bg  w-full h-screen  bg-cover bg-center bg-no-repeat  overflow-hidden' >
        <div className='  relative h-full flex justify-between items-end top-20'>        
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

       <div className="relative  left-1/4 transform -translate-x-1/2  w-3/12 xs:w-6/12 sm:w-4/12 md:w-5/12 lg:w-3/12 xl:w-3/12 ">
        <img className="w-full  " src={drum} alt="Drum" />
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
                    endValue: 500,
                    property: "translateY"          
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
  <img className="absolute xs:w-8/12 sm:w-8/12 md:w-6/12 lg:w-4/12" src={productTitle} alt="Ambition Title" />
</div>
</Plx>
              </div>
        </div>
        {/* Armagnac*/}
        <div style={{
                              '--md-img': `url(${armagnacBg})`,
                              '--xs-img': `url(${armagnacbgRes})`,
                              '--sm-img': `url(${armagnacbgRes})`,
                            }}
        className='xs:bg-[image:var(--xs-img)] sm:bg-[image:var(--sm-img)] md:bg-[image:var(--md-img)]  
        w-full h-auto  bg-cover bg-center bg-no-repeat bg-blend-darken ' > 
        <a href="/armagnac">
        <div className="flex items-center justify-center pt-20"> 
        <img className='w-96 h-auto '  src={armagnacTitle} /> 
        </div>           
              <div className='container mx-auto p-5 text-center '>
                  <div className="grid grid-cols-1 gap-4   md:grid-cols-[55%_auto] ">                 
                    
                              <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center  '>
                                                                                                             
                                        <p className=' font-Trojan 
                                   mb-3                                                                    
                                   text-sm
                                   font-medium                                  
                                   text-ambition-text-color
                                   first-line:tracking-widest 
                                   first-letter:text-7xl 
                                   first-letter:font-bold 
                                   first-letter:text-ambition-text-color
                                   dark:first-letter:text-ambition-text-color 
                                   first-letter:me-3 
                                   first-letter:float-start 
                                   text-justify'>
                                     Description : Exquisite Armagnac with pale gold hue and refreshing, floral notes on the nose invite you to a 
                                      delightful experience. The palate reveals a pleasing and lively character, accentuated by vibrant lemony notes, 
                                      making it a perfect choice for those seeking a bright and refreshing indulgence.
                                    </p>
                                    <p className=' font-Trojan  w-full  text-sm font-medium  text-ambition-text-color  text-justify'>
                                    Color : Amber, pale gold. </p>
                                    <p className=' font-Trojan    w-full text-sm font-medium  text-ambition-text-color  text-justify'>
                                    Nose : Fresh, with floral notes. </p>
                                      <p className=' font-Trojan   w-full  text-sm font-medium  text-ambition-text-color  text-justify'>
                                      Palate : Pleasant and lively with hints of lemon and honey. </p>
                                    </div>
                                    <div className='grid grid-cols-1  md:grid-cols-[70%_auto] gap-4 pt-10 place-items-center'>                                    
                                    <p className=' font-Trojan   w-full  text-sm font-medium  text-ambition-text-color  text-justify pt-10'>   
                                    <span className='font-Arka text-4xl'>Marie-Antoinette</span>     <br></br>                                
                                    Mustrian princess born on November 2, 1755 in Vienna, and wife of King Louis Sixteen, she occupies a
                                       symbolic place in the history of Versailles. As Dauphine of France, she is said to love theater, 
                                       comedy, dance and music. She is also said to be tall and most beautiful with lovely gait.  </p>
                                       <img className='w-60  h-auto place-items-center'  src={marie} />
                                    </div>
                                    
                                  </article>
                                  
                                  <div className=' grid grid-cols-1 gap-4 bg-transparent  cursor-pointer group perspective '>
                                          <div ref={div1}  className='relative preserve-3d   w-11/12  xs:w-full  ' > 
                                                <div className='  xs:h-auto  flex items-center justify-center '  >
                                                {!div1Inview && <img className='w-10/12 h-auto  bottle-rotate-sketch d-none d-none'  src={armagnacBlur} /> }
                                                    </div>
                                              <div className='  xs:h-auto   flex items-center justify-center  '>
                                                    {div1Inview && <img className='w-10/12 h-auto bottle-rotate-original '  src={armagnacBottle1} /> }
                                                    </div>
                                          </div>                                
                              </div>                              
                              {/* <div className="grid grid-cols-1 gap-4 bg-transparent  group perspective">
                                  <div className="relative preserve-3d w-11/12 xs:w-full  armagnac-section">
                                    <div
                                        className={`absolute w-full h-screen xs:h-auto ${ isFlipped ? "my-rotate-y-180 " : "" } backface-hidden`} >
                                        <img className="w-10/12 h-auto"  src={armagnacBottle}   alt="Armagnac Bottle Front"   />
                                    </div>
                                    <div
                                      className={`absolute w-full h-screen xs:h-auto ${ isFlipped ? "" : "my-rotate-y-180" } backface-hidden`} >
                                      <img  className="w-10/12 h-auto"   src={armagnacBottle1}  alt="Armagnac Bottle Back"  />
                                    </div>
                                  </div>
                                </div> */}
                    </div>
                </div>    
                </a>       
        </div>   
       
        {/* Cognac*/}
        <div style={{
                              '--md-img': `url(${cognacbg})`,
                              '--xs-img': `url(${cognacbgRes})`,
                              '--sm-img': `url(${cognacbgRes})`,
                            }}
        className='xs:bg-[image:var(--xs-img)] sm:bg-[image:var(--sm-img)] md:bg-[image:var(--md-img)]  
        w-full h-auto  bg-cover bg-center bg-no-repeat bg-blend-darken ' > 
        <a href="/cognac">  
        <div className="flex items-center justify-center pt-20"> 
            <img className='w-96 h-auto text-center'  src={cognacTitle} />
        </div>
                
              <div className='container mx-auto p-5 text-center '>
              
                  <div className="grid grid-cols-1 gap-4   md:grid-cols-[45%_auto]">                 
                  <div className=' grid grid-cols-1 gap-4 bg-transparent  cursor-pointer group perspective '>
                                          <div ref={div2}  className='relative preserve-3d   w-11/12  xs:w-full  ' > 
                                                <div className='  xs:h-auto  flex items-center justify-center '  >
                                                {!div2Inview && <img className='w-10/12 h-auto  bottle-rotate-sketch  '  src={cognacBlur} /> }
                                                    </div>
                                              <div className='  xs:h-auto   flex items-center justify-center  '>
                                                    {div2Inview && <img className='w-10/12 h-auto bottle-rotate-original '  src={cognacBottle1} /> }
                                                    </div>
                                          </div>                                
                              </div>       
                              <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center  pt-10'>
                                                                                                              
                                        <p className=' font-Trojan 
                                   mb-3                                                                    
                                   text-sm
                                   font-medium                                  
                                   text-ambition-text-color
                                   first-line:tracking-widest 
                                   first-letter:text-7xl 
                                   first-letter:font-bold 
                                   first-letter:text-ambition-text-color
                                   dark:first-letter:text-ambition-text-color 
                                   first-letter:me-3 
                                   first-letter:float-start 
                                   text-justify'>
                                      Description : A radiant, straw-yellow cognac graced with a gentle, non-alcoholic allure. 
                                      Nose is delighted starting from a white-fleshed fruit aromas, accompanied by a nuanced interplay of 
                                      woody undertones and delicate florals. The palate delights with bold yet a buttery introduction, 
                                      enriched by subtle pear notes and a warm, spicy crescendo.
                                    </p>
                                    <p className=' font-Trojan  w-full  text-sm font-medium  text-ambition-text-color  text-justify'>
                                    Color : Bright, straw-yellow color with numerous legs running down the glass. </p>
                                    <p className=' font-Trojan    w-full text-sm font-medium  text-ambition-text-color  text-justify'>
                                    Nose : Initially, there are notes of fresh white-fleshed fruits, such as grapes and peaches. Slightly woody, with slight hints of flowers like hawthorn and linden blossom, 
                                    finishing with scents of licorice.. </p>
                                      <p className=' font-Trojan   w-full  text-sm font-medium  text-ambition-text-color  text-justify'>
                                      Palate : Begins with a bold attack featuring pastry-like, buttery flavors, followed by a smooth, indulgent character.</p>
                                    </div>
                                    <div className='grid grid-cols-1  md:grid-cols-[70%_auto] gap-4 pt-10 place-items-center'>                                    
                                    <p className=' font-Trojan   w-full  text-sm font-medium  text-ambition-text-color  text-justify pt-10'>   
                                    <span className='font-Arka text-4xl'>Le Grand Dauphin</span>     <br></br>                                
                                    Le Grand Dauphin son of Louis Fourteen and Marie Thérèse of Austria. He received an exceptional education from the great Bossuet, 
                                    which earned him a good reputation at court. As a descendant of the Sun King, he inherited his majesty and his royal values. </p>
                                       <img className='w-60  h-auto place-items-center'  src={legrand} />
                                    </div>
                                  </article>                           
                    </div>
                </div>   
                </a>        
        </div>   
         {/* XO*/}
         <div style={{
                              '--md-img': `url(${xoBg})`,
                              '--xs-img': `url(${xobgRes})`,
                              '--sm-img': `url(${xobgRes})`,
                            }}
        className='xs:bg-[image:var(--xs-img)] sm:bg-[image:var(--sm-img)] md:bg-[image:var(--md-img)]  
        w-full h-auto  bg-cover bg-center bg-no-repeat bg-blend-darken ' >  
        <a href="/xobrandies">
        <div className="flex items-center justify-center pt-20"> 
              <img className='w-96 h-auto '  src={xoTitle} />   
        </div>          
              <div className='container mx-auto p-5 text-center '>
                  <div className="grid grid-cols-1 gap-4   md:grid-cols-[55%_auto] ">                 
                    
                              <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center  pt-10'> 
                                                                                                          
                                        <p className=' font-Trojan 
                                   mb-3                                                                    
                                   text-sm
                                   font-medium                                  
                                   text-ambition-text-color
                                   first-line:tracking-widest 
                                   first-letter:text-7xl 
                                   first-letter:font-bold 
                                   first-letter:text-ambition-text-color
                                   dark:first-letter:text-ambition-text-color 
                                   first-letter:me-3 
                                   first-letter:float-start 
                                   text-justify'>
                                    Description : A masterpiece with a dark amber hue, subtle notes of dark chocolate, caramel, and a palate that unfolds honey, 
                                      bush-peach, figs, and chocolate, leaving a remarkably intense and complex aftertaste. 
                                       The ultimate choice for epicureans seeking an extraordinary experience.
                                    </p>
                                    <p className=' font-Trojan  w-full  text-sm font-medium  text-ambition-text-color  text-justify'>
                                    Color : Dark amber colour with copper reflexions. It is a blend of very old brandies that has been rested in oak 
                                    cognac barrels for several years. </p>
                                    <p className=' font-Trojan    w-full text-sm font-medium  text-ambition-text-color  text-justify'>
                                    Nose : The nose is impressively aromatic, yet subtle and delightful, melted notes of dark chocolate and caramel. </p>
                                      <p className=' font-Trojan   w-full  text-sm font-medium  text-ambition-text-color  text-justify'>
                                      Palate : In the palate it releases fragrances of honey, bush-peach, figs and chocolate. The aftertaste is exceptionnaly long, very intense and complex. </p>
                                    </div>
                                    <div className='grid grid-cols-1  md:grid-cols-[70%_auto] gap-4 pt-10 place-items-center'>                                    
                                    <p className=' font-Trojan   w-full  text-sm font-medium  text-ambition-text-color  text-justify pt-10'>   
                                    <span className='font-Arka text-4xl'>Lafayette</span>     <br></br>                                
                                    Marquis de Lafayette, born into a highly noble aristocratic family in Chavaniac, France in 1757, was destined for greatness, 
                                    earning the title 'Hero of Two Worlds' for his influential role in Europe and America. Serving as the Commander
                                     of the National Guard, he forged a successful military career that mirrored his distinct persona.  </p>
                                       <img className='w-60  h-auto place-items-center'  src={lafeyetee} />
                                    </div>
                                  </article>
                                  <div className=' grid grid-cols-1 gap-4 bg-transparent  cursor-pointer group perspective '>
                                          <div ref={div3}  className='relative preserve-3d   w-11/12  xs:w-full  ' > 
                                                <div className='  xs:h-auto  flex items-center justify-center '  >
                                                {!div3Inview && <img className='w-10/12 h-auto  bottle-rotate-sketch  '  src={xoBlur} /> }
                                                    </div>
                                              <div className='  xs:h-auto   flex items-center justify-center  '>
                                                    {div3Inview && <img className='w-10/12 h-auto bottle-rotate-original '  src={xoBottle1} /> }
                                                    </div>
                                          </div>                                
                              </div>                              
                    </div>
                </div>
                </a>           
        </div>   
        
        {/* Bordueax - wine*/}
        <div style={{
                              '--md-img': `url(${bordeauxBg})`,
                              '--xs-img': `url(${bordeauxbgRes})`,
                              '--sm-img': `url(${bordeauxbgRes})`,
                            }}
        className='xs:bg-[image:var(--xs-img)] sm:bg-[image:var(--sm-img)] md:bg-[image:var(--md-img)]    w-full h-auto  bg-cover bg-center bg-no-repeat bg-blend-darken ' >            
        <a href="/bordeauxsuperieur">
        <div className="flex items-center justify-center pt-20"> 
            <img className='w-96 h-auto '  src={bordeauxTitle} />
        </div>
              <div className='container mx-auto p-5 text-center '>
                  <div className="grid grid-cols-1 gap-4   md:grid-cols-[45%_auto] ">
                  <div className=' grid grid-cols-1 gap-4 bg-transparent  cursor-pointer group perspective '>
                                          <div ref={div4}  className='relative preserve-3d   w-11/12  xs:w-full  ' > 
                                                <div className='  xs:h-auto  flex items-center justify-center '  >
                                                {!div4Inview && <img className='w-10/12 h-auto  bottle-rotate-sketch  '  src={borduexBlur} /> }
                                                    </div>
                                              <div className='  xs:h-auto   flex items-center justify-center  '>
                                                    {div4Inview && <img className='w-10/12 h-auto bottle-rotate-original '  src={borduexWine1} /> }
                                                    </div>
                                          </div>                                
                              </div>                    
                         <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center  '>
                                                                                                              
                                        <p className=' font-Trojan 
                                   mb-3                                                                    
                                   text-sm
                                   font-medium                                  
                                   text-ambition-text-color
                                   first-line:tracking-widest 
                                   first-letter:text-7xl 
                                   first-letter:font-bold 
                                   first-letter:text-ambition-text-color
                                   dark:first-letter:text-ambition-text-color 
                                   first-letter:me-3 
                                   first-letter:float-start 
                                   text-justify'>
                                      Description : Wine of rich elegance, displaying a ruby hue with alluring garnet highlights. 
                                      This wine captivates with a ruby color and garnet reflections. Its intense nose combines fruit brandy and 
                                      delicate mocha coffee notes, while the palate offers an easy-drinking experience, featuring discreet tannins and a warm, 
                                      alcoholic finish.
                                    </p>
                                    <p className=' font-Trojan  w-full  text-sm font-medium  text-ambition-text-color  text-justify'>
                                    Color : Bright, straw-yellow color with numerous legs running down the glass. </p>
                                    <p className=' font-Trojan    w-full text-sm font-medium  text-ambition-text-color  text-justify'>
                                    Nose : Initially, there are notes of fresh white-fleshed fruits, such as grapes and peaches. Slightly woody, with slight hints of flowers like hawthorn and linden blossom, 
                                    finishing with scents of licorice.. </p>
                                      <p className=' font-Trojan   w-full  text-sm font-medium  text-ambition-text-color  text-justify'>
                                      Palate : Begins with a bold attack featuring pastry-like, buttery flavors, followed by a smooth, indulgent character.</p>
                                    </div>
                                    <div className='grid grid-cols-1  md:grid-cols-[70%_auto] gap-4 place-items-center'>                                    
                                    <p className=' font-Trojan   w-full  text-sm font-medium  text-ambition-text-color  text-justify pt-10'>   
                                    <span className='font-Arka text-4xl'>Jacques Bossuet</span>     <br></br>                                
                                    Le Grand Dauphin son of Louis Fourteen and Marie Thérèse of Austria. He received an exceptional education from the great Bossuet, 
                                    which earned him a good reputation at court. As a descendant of the Sun King, he inherited his majesty and his royal values. </p>
                                       <img className='w-60  h-auto place-items-center'  src={jaques} />
                                    </div>
                                  </article>                           
                    </div>
                </div> 
                </a>          
        </div>  
        {/* Saint-emilion*/}
       
        <div style={{
                              '--md-img': `url(${saintBg})`,
                              '--xs-img': `url(${saintbgRes})`,
                              '--sm-img': `url(${saintbgRes})`,
                            }}
        className='xs:bg-[image:var(--xs-img)] sm:bg-[image:var(--sm-img)] md:bg-[image:var(--md-img)]   w-full h-auto  bg-cover bg-center bg-no-repeat  ' >            
        <a href="/lussacsaintemillion">
        <div className="flex items-center justify-center pt-20"> 
        <img className='w-96 h-auto '  src={saintemillionTitle} />  
        </div>
              <div className='container mx-auto p-10 text-center '>
                  <div className="grid grid-cols-1 gap-4   md:grid-cols-[60%_auto] ">
                  <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center '>
                                                                                                     
                                        <p className=' font-Trojan 
                                   mb-3                                                                    
                                   text-sm
                                   font-medium                                  
                                   text-ambition-text-color
                                   first-line:tracking-widest 
                                   first-letter:text-7xl 
                                   first-letter:font-bold 
                                   first-letter:text-ambition-text-color
                                   dark:first-letter:text-ambition-text-color 
                                   first-letter:me-3 
                                   first-letter:float-start 
                                   text-justify'>
                                     Description : Wine of remarkable character, boasting a deep, sustained purple hue. 
                                     The delightful aroma offers sweet spices, brioche, and hints of white fruit, while the palate combines
                                      smooth yet powerful tannins with evolving oak nuances, resulting in a generous and fruit-rich wine.
                                    </p>
                                    <p className=' font-Trojan  w-full  text-sm font-medium  text-ambition-text-color  text-justify'>
                                    Color : Beautiful sustained deep purple color. </p>
                                    <p className=' font-Trojan    w-full text-sm font-medium  text-ambition-text-color  text-justify'>
                                    Nose : Hints of sweet spices, brioche and black fruit. </p>
                                      <p className=' font-Trojan   w-full  text-sm font-medium  text-ambition-text-color  text-justify'>
                                      Palate: Smooth and powerful tannins mixed with lovely oak tannins, which evolve constantly giving 
                                      a fleshy generous wine with plenty of fruits.</p>
                                    </div>
                                    <div className='grid grid-cols-1  md:grid-cols-[30%_auto] gap-4 pt-10 place-items-center'>
                                    <img className='w-60  h-auto place-items-center'  src={marieTherese} />
                                    <p className=' font-Trojan   w-full  text-sm font-medium  text-ambition-text-color  text-justify '>   
                                    <span className='font-Arka text-4xl'>Maire Therese</span>     <br></br>                                
                                    Marie Therese, born amid the splendors of Versailles on December 19, 1779, is the eldest daughter 
                                    of Louis Sixteen. Historically known as Madame Royale, she symbolizes the royal monarchy 
                                    and stands as the sole survivor among the royal children during the French Revolution of 1789. </p>
                                    </div>
                                  </article>
                                  {/* <div className=' grid grid-cols-1 gap-4 bg-transparent  cursor-pointer group perspective '>
                                  <div className='relative preserve-3d  group-hover:my-rotate-y-180  w-full  xs:w-full duration-1000'>
                                      <div className='absolute   w-full h-screen xs:h-auto backface-hidden'>
                                        <img className='w-full h-auto'  src={saintemilionBottle} />
                                      </div>
                                      <div className=' w-full h-screen xs:h-auto   my-rotate-y-180 backface-hidden'>
                                      <img className='w-full h-auto'  src={saintemilionBottle1} />
                                      </div>
                                   </div>                                 
                              </div>  */}
                               <div className=' grid grid-cols-1 gap-4 bg-transparent  cursor-pointer group perspective '>
                                          <div ref={div5}  className='relative preserve-3d   w-11/12  xs:w-full  ' > 
                                                <div className='  xs:h-auto  flex items-center justify-center '  >
                                                {!div5Inview && <img className='w-10/12 h-auto  bottle-rotate-sketch  '  src={saintemilionBlur} /> }
                                                    </div>
                                              <div className='  xs:h-auto   flex items-center justify-center  '>
                                                    {div5Inview && <img className='w-10/12 h-auto bottle-rotate-original '  src={saintemilionBottle1} /> }
                                                    </div>
                                          </div>                                
                              </div>   
                                                       
                    </div>
                </div>   
            </a>        
        </div>
        
    </div>
  )
}
export default Products;