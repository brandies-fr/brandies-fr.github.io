import React from 'react'
import Plx from "react-plx";
// import { Navbar } from '../components/Navbar'
import HamburgerMenu from '../components/HamburgerMenu';
import BrochureIcon from "../components/BrochureIcon";
// import { HeaderIcons } from '../components/HeaderIcons';
import bgOdd from '../assets/images/bg-odd.jpg';
import bgoddRes from '../assets/images/ambition-responsive-bg.jpg';
import bgEven from '../assets/images/bg-even.jpg';
import bgevenRes from '../assets/images/bg-even-responsive.jpg';
// Video
// import campFire from '../assets/video/campfire.mp4'
import smoke from '../assets/video/smoke.mp4';
// images
import gateImage from '../assets/images/ambition/gate.png';
import ambitionTitle from '../assets/images/ambition/title.png';
import authenticityTitle from '../assets/images/authenticity-title.png';
// import authenticityImg from '../assets/images/authenticity-img.png';
import authenticityImg from '../assets/images/authenticity.gif';
import excellenceImg from '../assets/images/excellence.gif';
import excellenceTitle from '../assets/images/excellence-title.png';
import traditionTitle from '../assets/images/tradition-title.png';
import traditionImg from '../assets/images/tradition.gif';
import passionImg from '../assets/images/passion-img.png';
import passionTitle from '../assets/images/passion-title.png';


export const Ambition = () => {
  return (
    <div>
     <HamburgerMenu/>
     <BrochureIcon/>
     {/* <HeaderIcons /> */}
        {/* Header Section */}
        <div className='bg-ambition-header-bg w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden'>
  <div className='relative h-full flex justify-between items-end'>
    {/* Left image */}
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
      <div className="absolute left-0 bottom-0 w-full">
        <img className="w-full md:w-full lg:w-full  xl:w-full scale-x-[-1]" src={gateImage} alt="Left Gate Image" />
      </div>
    </Plx>

    {/* Right image */}
    <Plx
      parallaxData={[
        {
          start: 0,
          end: 200,
          easing: "ease-in",
          properties: [
            {
              startValue: 0,
              endValue: 700,
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
      <div className="absolute right-0 bottom-0 w-full">
        <img className="w-full md:full lg:w-full  xl:w-full" src={gateImage} alt="Right Gate Image" />
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
  <img className="absolute xs:w-8/12 sm:w-8/12 md:w-6/12 lg:w-4/12" src={ambitionTitle} alt="Ambition Title" />
</div>

</Plx>

  </div>
</div>


        {/*Authenticity */}
        <div style={{
                              '--md-img': `url(${bgOdd})`,
                              '--xs-img': `url(${bgoddRes})`,
                              '--sm-img': `url(${bgoddRes})`,
                            }}
        className='xs:bg-[image:var(--xs-img)] sm:bg-[image:var(--sm-img)] md:bg-[image:var(--md-img)]  w-full h-auto  bg-cover bg-center bg-no-repeat bg-blend-darken ' >            
              <div className='container mx-auto p-5 text-center '>
                  <div className="grid grid-cols-1 gap-8   md:grid-cols-2 ">
                  <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center  pt-32'>
                                      <img className='w-96 h-auto '  src={authenticityTitle} />                                        
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
                                   <img className='w-full h-auto'  src= {authenticityImg}/>
                              </div>
                            
                    </div>
                </div>
           
        </div>
        {/*Excellence */}
        
  
         <div style={{
          '--md-img': `url(${bgEven})`,
          '--xs-img': `url(${bgevenRes})`,
          '--sm-img': `url(${bgevenRes})`,
        }}
        
        className=' xs:bg-[image:var(--xs-img)] sm:bg-[image:var(--sm-img)] md:bg-[image:var(--md-img)] w-full h-auto  bg-cover bg-center bg-no-repeat  ' >
              <div className='container mx-auto  text-center '>
                  <div className="grid grid-cols-1 md:grid-cols-2 ">
                  <div className=' grid grid-cols-1 place-items-center pt-5'>
                                   <img className='w-full h-auto md:w-11/12'  src={excellenceImg} />
                              </div>
                                  <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center  pt-32'>
                                      <img className='w-96 h-auto '  src={excellenceTitle} />                                        
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
    <div style={{
                              '--md-img': `url(${bgOdd})`,
                              '--xs-img': `url(${bgoddRes})`,
                              '--sm-img': `url(${bgoddRes})`,
                            }}
        className='xs:bg-[image:var(--xs-img)] sm:bg-[image:var(--sm-img)] md:bg-[image:var(--md-img)]   w-full h-auto  bg-cover bg-center bg-no-repeat bg-blend-darken ' >            
              <div className='container mx-auto p-5 text-center '>
                  <div className="grid grid-cols-1 gap-8   md:grid-cols-2 ">
                  <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center  pt-32'>
                                      <img className='w-96 h-auto '  src={traditionTitle} />                                        
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
                            <div className=' grid grid-cols-1 gap-4 place-items-center  overflow-hidden'>
                                   <img className='w-full h-auto'  src={traditionImg} />
                                 
                          
                              </div>
                            
                    </div>
                </div>
           
        </div>
        {/*Passion*/}
        
         <div style={{
          '--md-img': `url(${bgEven})`,
          '--xs-img': `url(${bgevenRes})`,
          '--sm-img': `url(${bgevenRes})`,
        }}
        
        className=' xs:bg-[image:var(--xs-img)] sm:bg-[image:var(--sm-img)] md:bg-[image:var(--md-img)] w-full h-auto  bg-cover bg-center bg-no-repeat  ' >
            <video muted={true} autoPlay={true} playsInline={true} loop={true} className='  absolute scale-x-[-1]   smoke_video '  >
                              <source src={smoke} type="video/mp4" />
                          </video>
              <div className='container mx-auto  text-center '>
                  <div className="grid grid-cols-1 md:grid-cols-2 ">
                  <div className=' grid grid-cols-1 place-items-center pt-5'>
                                   <img className='w-full h-auto md:w-11/12'  src={passionImg} />
                              </div>
                                  <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center  pt-32'>
                                      <img className='w-96 h-auto '  src={passionTitle} />                                        
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
export default Ambition;
