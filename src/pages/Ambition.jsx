import React from 'react'
import Plx from "react-plx";
// import { Navbar } from '../components/Navbar'

export const Ambition = () => {
  return (
    <div>
  
        {/* Header Section */}
        <div className='bg-ambition-header-bg  w-full  h-screen bg-cover bg-center bg-no-repeat overflow-hidden ' >
            <div className='  d-flex relative bg-contain object-none top-48 '>
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
                                        position: "absolute",         
                                        width: "100%",
                                        zIndex: 100,
                                     
                                      }}
                                    >
                      <img className='absolute  left-0  w-6/12   scale-x-[-1]   lg:w-6/12  md:w-6/12 sm:w-6/12 '  src='../src/assets/images/ambition/gate.png' /> 
                              </Plx>
                      <Plx
                                      parallaxData={[
                                       
                                        {
                                          start: 0,
                                          end: 200,
                                          easing: "ease-in",
                                          properties: [
                                            {
                                              startValue: 1,
                                              endValue: 700,
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

                      <img className='absolute right-0 lg:w-6/12  md:w-6/12 sm:w-6/12 '  src='../src/assets/images/ambition/gate.png' /> 
                      </Plx> 
                      <Plx
                                      parallaxData={[
                                       
                                        {
                                          start: 0,
                                          end: 200,
                                          easing: "ease-in",
                                          properties: [
                                            {
                                              startValue: 1,
                                              endValue: 300,
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

                      <img className='absolute right-20 top-40  lg:w-4/12  md:w-6/12 sm:w-6/12 '  src='../src/assets/images/ambition/title.png' /> 
                      </Plx> 
              </div>
            </div>
        {/*Authenticity */}
        <div className='bg-ambition-bg-odd  w-full h-auto  bg-cover bg-center bg-no-repeat bg-blend-darken ' >            
              <div className='container mx-auto p-5 text-center '>
                  <div className="grid grid-cols-1 gap-8   md:grid-cols-2 ">
                  <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center  pt-32'>
                                      <img className='w-96 h-auto '  src='../src/assets/images/authenticity-title.png' />                                        
                                        <p className=' font-Trojan 
                                   mb-3
                                   w-9/12                                   
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
                                      The hallmark of values and genuineness which Brandies is tied to is the cornerstone 
                                      of its identity and reputation.
                                    </p>
                                    <p className=' font-Trojan  mb-3  w-9/12  text-sm font-medium  text-ambition-text-color  text-justify'>
                                    All our products meets the needed standards set forth by French AOC (Appellation d'Origine Contrôlée) 
                                    system that is designed to protect distinctive and traditional regional products of France.
                                     With a genunine interest in spreading the authenthic french wine and spirits,
                                      we believe in open communication, ethical practices, and a genuine commitment to our customers' well-being.
                                    </p>
                                    </div>
                                  </article>
                            <div className=' grid grid-cols-1 gap-4 place-items-center'>
                                   <img className='w-full h-auto'  src='../src/assets/images/authenticity-img.png' />
                              </div>
                            
                    </div>
                </div>
           
        </div>
        {/*Excellence */}
        <div className='bg-ambition-bg-even  w-full h-auto  bg-cover bg-center bg-no-repeat  ' >
              <div className='container mx-auto  text-center '>
                  <div className="grid grid-cols-1 md:grid-cols-2 ">
                  <div className=' grid grid-cols-1 place-items-left pt-5'>
                                   <img className='w-full h-auto md:w-11/12'  src='../src/assets/images/excellence-image.png' />
                              </div>
                                  <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center  pt-32'>
                                      <img className='w-96 h-auto '  src='../src/assets/images/excellence-title.png' />                                        
                                      <p className=' font-Trojan 
                                   mb-3
                                   w-11/12                                   
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
                                      Excellence is not just a value for us; it's our legacy. We are dedicated to delivering excellence in every product, 
                                      services ensuring that we remain a trusted leader in our field. And we believe it's not a destination, 
                                      but a journey. That's why we constantly challenge ourselves to push the boundaries of what's possible, 
                                      delivering outstanding results with every endeavor.
                                    </p>
                                    <p className=' font-Trojan  mb-3  w-11/12  text-sm font-medium  text-ambition-text-color  text-justify'>
                                   It's the reason why our customers trust us. We continually invest in refining 
                                    our processes and skills to ensure that our work reflects nothing less than the very best.
                                    </p>
                                    </div>
                                  </article>                        
                         
                            
                    </div>
                </div>            
        </div>
    {/*Tradition */}
    <div className='bg-ambition-bg-odd  w-full h-auto  bg-cover bg-center bg-no-repeat bg-blend-darken ' >            
              <div className='container mx-auto p-5 text-center '>
                  <div className="grid grid-cols-1 gap-8   md:grid-cols-2 ">
                  <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center  pt-32'>
                                      <img className='w-96 h-auto '  src='../src/assets/images/tradition-title.png' />                                        
                                        <p className=' font-Trojan 
                                   mb-3
                                   w-9/12                                   
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
                                      We honor the rich tapestry of french history and heritage that spans generations in wine making and producing authentic spirits. 
                                      We take pride in upholding time-honored practices and values that have been passed down through generations.
                                    </p>
                                    <p className=' font-Trojan  mb-3  w-9/12  text-sm font-medium  text-ambition-text-color  text-justify'>
                                    With the wisdom from the past, we are always keen to experiment and innovate for the future, creating a unique blend of heritage and progress. 
                                    The traditions are the reflection of the commitment we have to our craft. 
                                    They inspire us to create products that not only meet high standards but also resonate with the stories of our history.
                                    </p>
                                    </div>
                                  </article>
                            <div className=' grid grid-cols-1 gap-4 place-items-center'>
                                   <img className='w-full h-auto'  src='../src/assets/images/tradition-img.png' />
                              </div>
                            
                    </div>
                </div>
           
        </div>
        {/*Passion*/}
        <div className='bg-ambition-bg-even  w-full h-auto  bg-cover bg-center bg-no-repeat  ' >
              <div className='container mx-auto  text-center '>
                  <div className="grid grid-cols-1 md:grid-cols-2 ">
                  <div className=' grid grid-cols-1 place-items-left pt-5'>
                                   <img className='w-full h-auto md:w-11/12'  src='../src/assets/images/passion-img.png' />
                              </div>
                                  <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center  pt-32'>
                                      <img className='w-96 h-auto '  src='../src/assets/images/passion-title.png' />                                        
                                      <p className=' font-Trojan 
                                   mb-3
                                   w-11/12                                   
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
                                      At Brandies, passion is the driving force behind innovation and quality. 
                                      We're not just here to do a job; we're here to make a difference, and that passion is evident in every detail.
                                    </p>
                                    <p className=' font-Trojan  mb-3  w-11/12  text-sm font-medium  text-ambition-text-color  text-justify'>
                                    Our team's passion is the secret ingredient behind our success.
                                     It's what propels us to go above and beyond, ensuring that each product and service is crafted with genuine care. 
                                     Passion is what drives us every day, fueling our dedication to excellence.
                                    </p>
                                    </div>
                                  </article>                        
                         
                            
                    </div>
                </div>
            
        </div>
    
    </div>
  )
}
