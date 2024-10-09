import React from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import BrochureIcon from "../components/BrochureIcon";
import xoLogo from '../assets/images/xo-logo.png'
import xoBottle from '../assets/images/xo-bottle1.png'
import homeBg from '../assets/images/product-single-bg.jpg';
import homebgRes from '../assets/images/armagnac-single-page-res.jpg';
import smoke from '../assets/video/smoke.mp4';
import xoMachine from '../assets/images/xo-machine.png'

export const Xobrandies = () => {
 // Function to check if the screen size is mobile
 const isMobile = () => {
    return window.innerWidth <= 450; 
  };
  // const videoClass = isMobile() && mobileLogomov ? 'my-video' : '';

  return (
    <div>
      <HamburgerMenu/>
     <BrochureIcon />
      <div
    style={{
      '--xs-img': `url(${homebgRes})`,
      '--sm-img': `url(${homebgRes})`,
      '--md-img': `url(${homebgRes})`,
      '--lg-img': `url(${homeBg})`,
    }}
    className='relative xs:bg-[image:var(--xs-img)] sm:bg-[image:var(--sm-img)] md:bg-[image:var(--md-img)] lg:bg-[image:var(--lg-img)] bg-home-bg bg-[#2b1809] w-full h-screen xs:min-h-screen xs:h-auto sm:min-h-screen sm:h-screen md:min-h-screen md:h-auto lg:min-h-screen lg:h-auto bg-center bg-no-repeat  ' >
            <video muted={true} autoPlay={true} playsInline={true} loop={true} className='  absolute smoke_video  scale-x-[-1]'  >
                <source src={smoke} type="video/mp4" /> 
             </video>
             <div className='container mx-auto text-center'>
             <div className="grid grid-cols-1 gap-4   lg:grid-cols-[30%_auto] ">
                    {/* Left */}
                            <div className=' grid grid-cols-1 gap-4 items-center justify-center lg:bg-black lg:bg-opacity-50 lg:h-screen'>
                                <div className='text-center'>
                                        <img className='w-6/12 h-auto mx-auto md:w-5/12 md:h-auto' src={xoLogo} alt="Armagnac Logo" />
                                </div>                    
                                <div className='text-center'>
                                    <img className='w-10/12 h-auto mx-auto' src={xoBottle} alt="Armagnac Bottle" />
                                </div>
                            </div>
                            {/* Right */}
                            <div className="grid grid-cols-1 gap-4   ">
                                    <div className=' grid grid-cols-1  gap-4 sm:grid-cols-1  lg:grid-cols-[60%_auto]'>
                                        <div className='text-center'>
                                                <article class="text-wrap ">
                                                    <div className=' grid grid-cols-1 gap-4  place-items-center  pt-8'>                                                                           
                                                    <p className="font-Trojan text-base font-normal
                                                    text-ambition-text-color 
                                                    first-line:tracking-widest first-letter:text-7xl 
                                                    first-letter:font-bold
                                                    first-letter:text-ambition-text-color 
                                                    dark:first-letter:text-ambition-text-color 
                                                    first-letter:me-3 first-letter:float-start 
                                                    text-justify px-4 text-sm">
                                                         Althought Brandy is a more general spirt and can be produced in various countries worldwide, each with its own regulations and terroir, French Brandy is a spirit associateed with France like Cognac and 
Armagnac preserving the terroir influence of France.
French Brandy can be produced in various regions of France with grapes grown from France allowing greater flexibility in terms of grape varieties, terroir, distillation and aging regulations. It should be noted that Brandy produced with the  grape varieties grown outside of France are 
not qualified for the title French Brandy. So the spirit with the title French Brandy is considered to be more qualitative and premium than the spirit named with the title Brandy.

In contrast to Cognac and Armagnac that has a renowed flavor profile, the flavor profile of French Brandy can vary widely based on the type of grapes used and the production method. It can range from fruity and aromatic to richer and spicier profiles.

                                           
                                                            </p>


                                                        </div>
                                                        
                                                    </article>
                                        </div>                    
                                        <div className='text-center'>
                                            <img className='w-full h-auto mx-auto' src={xoMachine} alt="Armagnac Bottle" />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 gap-4'>
                                            <p className="font-Trojan text-base font-normal text-sm  xs:text-ambition-text-color sm:text-ambition-text-color text-justify px-4">
                                            Description : A masterpiece with a dark amber hue, subtle notes of dark chocolate, caramel, and a palate that unfolds honey, bush-peach, figs, and chocolate, leaving a remarkably intense and complex aftertaste. The ultimate choice for epicureans seeking an extraordinary experience.
                                                            <br></br>
                                                            Color : Dark amber colour with copper reflexions. It is a blend of very old brandies that has been rested in oak cognac barrels for several years. <br></br>

Nose : The nose is impressively aromatic, yet subtle and delightful, melted notes of dark chocolate and caramel. <br></br>

Palate : In the palate it releases fragrances of honey, bush-peach, figs and chocolate. The aftertaste is exceptionnaly long, very intense and complex. <br></br>
                                            
                                            </p>
                                    </div>
                            </div>
                            

                    </div>
             </div>
  
  </div>
  </div>
  
  );
};
export default Xobrandies;
