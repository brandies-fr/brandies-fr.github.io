import React from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
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
    <div
    style={{
      '--xs-img': `url(${homebgRes})`,
      '--sm-img': `url(${homebgRes})`,
      '--md-img': `url(${homeBg})`,
    }}
    className='relative xs:bg-[image:var(--xs-img)] sm:bg-[image:var(--sm-img)] md:bg-[image:var(--md-img)] bg-home-bg bg-[#2b1809] w-full h-screen xs:min-h-screen xs:h-auto sm:min-h-screen sm:h-screen md:min-h-screen md:h-auto  bg-center bg-no-repeat ' >
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
                                                            Description : A masterpiece with a dark amber hue, subtle notes of dark chocolate, caramel, and a palate that unfolds honey, bush-peach, figs, and chocolate, leaving a remarkably intense and complex aftertaste. The ultimate choice for epicureans seeking an extraordinary experience.
                                                            <br></br><br></br>
                                                            Color : Dark amber colour with copper reflexions. It is a blend of very old brandies that has been rested in oak cognac barrels for several years. <br></br>

Nose : The nose is impressively aromatic, yet subtle and delightful, melted notes of dark chocolate and caramel. <br></br>

Palate : In the palate it releases fragrances of honey, bush-peach, figs and chocolate. The aftertaste is exceptionnaly long, very intense and complex. <br></br>
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
                                            In 1771, he began his training at Versailles and became close to the royal family. He took part in the major upheavals of the 18th century, which were the American War of Independence, the French Revolution, the Restoration and also the July Revolution of 1830.
                                            <br></br>
                                            In 1771, he began his training at Versailles and became close to the royal family. He took part in the major upheavals of the 18th century, which were the American War of Independence, the French Revolution, the Restoration and also the July Revolution of 1830.
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
