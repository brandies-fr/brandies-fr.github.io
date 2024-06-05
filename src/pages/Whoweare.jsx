import React from 'react'
// import { Navbar } from '../components/Navbar'
//import product from "../assets/video/products.mp4"
export const Whoweare = () => {
  return (
    <div>
    {/* <Navbar /> */}
        {/* Header Section */}
       <div className='bg-whoweare-bg  w-screen h-screen  bg-cover bg-center bg-no-repeat pt-20 ' >            
              <div className='container mx-auto p-10 text-center '>
                  <div className="grid grid-cols-1 gap-4   md:grid-cols-[60%_auto] ">
                  <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center  pt-20'>                                                                           
                                        <p className=' font-Trojan 
                                   mb-3                                                                    
                                   text-base
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
                                    Nested in Cognac, the spirit valley of france, Brandies is a distinguished purveyor of exquisite 
                                    French wines and spirits, embracing the artistry of aging and blending. <br></br> <br></br>Carefully nurturing the finest ingredients to create remarkable libations, 
                                    our collection embodies the essence of France and french culture, with each bottle encapsulating the rich heritage, 
                                    timeless traditions, and a deep passion for perfection that captivate human senses. Our collection is a celebration of 
                                    elegance, where the past and present converge to deliver an unparalleled experience. Explore a world of indulgence and 
                                    savor the opulence of Brandies.                                    
                                    </p>
                                    </div>
                                    
                                  </article>
                            <div className=' grid grid-cols-1 gap-4 place-items-center'>
                                   <img className='w-full h-auto'  src='../src/assets/images/whoweare-img.png' />
                              </div>                            
                    </div>
                </div>           
        </div>
</div>
  )
}
