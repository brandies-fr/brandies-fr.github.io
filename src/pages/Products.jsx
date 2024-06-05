import React from 'react'
// import { Navbar } from '../components/Navbar'
//import product from "../assets/video/products.mp4"
export const Products = () => {
  return (
    <div>
    {/* <Navbar /> */}
        {/* Header Section */}
        <div className='bg-cepage-bg-img  w-full h-[700px]  bg-cover bg-center bg-no-repeat  ' >
        <div className='container mx-auto pt-20 text-center '>
              <div className=" ">
                  <article class="text-wrap text-7xl font-Trojan pt-36 ">
                         Products Header Section
                  </article>
                </div>
          </div>
        </div>
        {/* Armagnac*/}
        <div className='bg-armagnac-bg  w-full h-auto  bg-cover bg-center bg-no-repeat bg-blend-darken ' >            
              <div className='container mx-auto p-5 text-center '>
                  <div className="grid grid-cols-1 gap-4   md:grid-cols-[58%_auto] pt-24">
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
                                    <p className=' font-Trojan  w-full  text-sm font-medium  text-ambition-text-color  text-right'>
                                    Color : Amber, pale gold. </p>
                                    <p className=' font-Trojan    w-full text-sm font-medium  text-ambition-text-color  text-right'>
                                      Nose : Fresh, with floral notes. </p>
                                      <p className=' font-Trojan   w-full  text-sm font-medium  text-ambition-text-color  text-right'>
                                      Palate : Pleasant and lively with hints of lemon and honey. </p>
                                    </div>
                                    <div className='grid grid-cols-1  md:grid-cols-[30%_auto] gap-4 pt-10'>
                                    <img className='w-60  h-auto place-items-center'  src='../src/assets/images/marie-img.png' />
                                    <p className=' font-Trojan   w-full  text-sm font-medium   text-ambition-text-color  text-justify pt-10'>   
                                    <span className='font-Arka text-4xl'>Marie-Antoinette</span>     <br></br>                                
                                      Mustrian princess born on November 2, 1755 in Vienna, and wife of King Louis Sixteen, she occupies a
                                       symbolic place in the history of Versailles. As Dauphine of France, she is said to love theater, 
                                       comedy, dance and music. She is also said to be tall and most beautiful with lovely gait. </p>
                                    </div>
                                  </article>
                            <div className=' grid grid-cols-1 gap-4 bg-transparent  cursor-pointer group perspective'>
                                  <div className='relative preserve-3d  group-hover:my-rotate-y-180  w-full h-auto duration-1000'>
                                      <div className='absolute   w-full h-full backface-hidden'>
                                        <img className='w-full h-auto'  src='../src/assets/images/armagnac-bottle.png' />
                                      </div>
                                      <div className='absolute w-full h-full   my-rotate-y-180 backface-hidden'>
                                      <img className='w-full h-auto'  src='../src/assets/images/armagnac-bottle1.png' />
                                      </div>
                                   </div>                                 
                              </div>                            
                    </div>
                </div>
           
        </div>   
        {/* Cognac*/}
        <div className='bg-cognac-bg  w-full h-auto  bg-cover bg-center bg-no-repeat bg-blend-darken ' >            
              <div className='container mx-auto p-5 text-center '>
                  <div className="grid grid-cols-1 gap-4   md:grid-cols-[42%_auto] pt-36">                 
                  <div className=' grid grid-cols-1 gap-4 bg-transparent  cursor-pointer group perspective '>
                                  <div className='relative preserve-3d  group-hover:my-rotate-y-180  w-full h-auto duration-1000'>
                                      <div className='absolute   w-full h-full backface-hidden'>
                                        <img className='w-full h-auto'  src='../src/assets/images/cognac-bottle.png' />
                                      </div>
                                      <div className='absolute w-full h-full   my-rotate-y-180 backface-hidden'>
                                      <img className='w-full h-auto'  src='../src/assets/images/cognac-bottle1.png' />
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
                                    <div className='grid grid-cols-1  md:grid-cols-[70%_auto] gap-4 pt-10'>                                    
                                    <p className=' font-Trojan   w-full  text-sm font-medium  text-ambition-text-color  text-justify pt-10'>   
                                    <span className='font-Arka text-4xl'>Le Grand Dauphin</span>     <br></br>                                
                                    Le Grand Dauphin son of Louis Fourteen and Marie Thérèse of Austria. He received an exceptional education from the great Bossuet, 
                                    which earned him a good reputation at court. As a descendant of the Sun King, he inherited his majesty and his royal values. </p>
                                       <img className='w-60  h-auto place-items-center'  src='../src/assets/images/legrand-img.png' />
                                    </div>
                                  </article>                           
                    </div>
                </div>           
        </div>   
         {/* XO*/}
         <div className='bg-xo-bg  w-full h-auto  bg-cover bg-center bg-no-repeat bg-blend-darken ' >            
              <div className='container mx-auto p-10 text-center '>
                  <div className="grid grid-cols-1 gap-4   md:grid-cols-[60%_auto] ">
                  <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center  pt-20'>                                                                           
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
                                      Palate : In the palate it releases fragrances of honey, bush-peach, figs and chocolate. The aftertaste is exceptionnaly long, very intense and complex.</p>
                                    </div>
                                    <div className='grid grid-cols-1  md:grid-cols-[30%_auto] gap-4 pt-10'>
                                    <img className='w-60  h-auto place-items-center'  src='../src/assets/images/lafeyette-img.png' />
                                    <p className=' font-Trojan   w-full  text-sm font-medium  text-ambition-text-color  text-justify '>   
                                    <span className='font-Arka text-4xl'>Lafayette</span>     <br></br>                                
                                    Marquis de Lafayette, born into a highly noble aristocratic family in Chavaniac, France in 1757, was destined for greatness, 
                                    earning the title 'Hero of Two Worlds' for his influential role in Europe and America. Serving as the Commander
                                     of the National Guard, he forged a successful military career that mirrored his distinct persona. </p>
                                    </div>
                                  </article>
                            <div className=' grid grid-cols-1 gap-4 place-items-center'>
                                   <img className='w-full h-auto'  src='../src/assets/images/xo-bottle.png' />
                              </div>                            
                    </div>
                </div>           
        </div>
        {/* Bordueax - wine*/}
        <div className='bg-bordueax-bg  w-full h-auto  bg-cover bg-center bg-no-repeat bg-blend-darken ' >            
              <div className='container mx-auto p-5 text-center '>
                  <div className="grid grid-cols-1 gap-4   md:grid-cols-[42%_auto] ">                 
                            <div className=' grid grid-cols-1 gap-4 place-items-center pt-10' >
                                   <img className='w-full h-auto'  src='../src/assets/images/bordeaux-bottle.png' />
                              </div> 
                              <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center  pt-24'>                                                                           
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
                                    <div className='grid grid-cols-1  md:grid-cols-[70%_auto] gap-4 '>                                    
                                    <p className=' font-Trojan   w-full  text-sm font-medium  text-ambition-text-color  text-justify pt-10'>   
                                    <span className='font-Arka text-4xl'>Jacques Bossuet</span>     <br></br>                                
                                    Le Grand Dauphin son of Louis Fourteen and Marie Thérèse of Austria. He received an exceptional education from the great Bossuet, 
                                    which earned him a good reputation at court. As a descendant of the Sun King, he inherited his majesty and his royal values. </p>
                                       <img className='w-60  h-auto place-items-center'  src='../src/assets/images/jaques-img.png' />
                                    </div>
                                  </article>                           
                    </div>
                </div>           
        </div>  
        {/* Saint-emilion*/}
        <div className='bg-saint-emilion-bg  w-full h-auto  bg-cover bg-center bg-no-repeat bg-blend-darken ' >            
              <div className='container mx-auto p-10 text-center '>
                  <div className="grid grid-cols-1 gap-4   md:grid-cols-[60%_auto] ">
                  <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center  pt-20'>                                                                           
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
                                    <div className='grid grid-cols-1  md:grid-cols-[30%_auto] gap-4 pt-10'>
                                    <img className='w-60  h-auto place-items-center'  src='../src/assets/images/marie-therese.png' />
                                    <p className=' font-Trojan   w-full  text-sm font-medium  text-ambition-text-color  text-justify '>   
                                    <span className='font-Arka text-4xl'>Maire Therese</span>     <br></br>                                
                                    Marie Therese, born amid the splendors of Versailles on December 19, 1779, is the eldest daughter 
                                    of Louis Sixteen. Historically known as Madame Royale, she symbolizes the royal monarchy 
                                    and stands as the sole survivor among the royal children during the French Revolution of 1789. </p>
                                    </div>
                                  </article>
                            <div className=' grid grid-cols-1 gap-4 place-items-center'>
                                   <img className='w-full h-auto'  src='../src/assets/images/saint-emilion-bottle.png' />
                              </div>                            
                    </div>
                </div>           
        </div>
    </div>
  )
}
