import React from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import BrochureIcon from "../components/BrochureIcon";
import xoLogo from '../assets/images/bordeaux-logo.png'
import bordeauxBottle from '../assets/images/bordeaux-bottle1.png'
import homeBg from '../assets/images/product-single-bg.jpg';
import homebgRes from '../assets/images/armagnac-single-page-res.jpg';
import smoke from '../assets/video/smoke.mp4';
import bordeauxMachine from '../assets/images/bordeaux-machine.png'

export const Bordeauxsuperieur = () => {
 // Function to check if the screen size is mobile
 const isMobile = () => {
    return window.innerWidth <= 450; 
  };
  // const videoClass = isMobile() && mobileLogomov ? 'my-video' : '';

  return (
    <div>
      <HamburgerMenu/>
      <BrochureIcon/>
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
                                    <img className='w-10/12 h-auto mx-auto' src={bordeauxBottle} alt="Armagnac Bottle" />
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
                                                           Bordeaux-supérieur is a French appellation d'origine contrôlée wine produced like the Bordeaux appellation throughout the Bordeaux vineyards, but it includes wines from older vines. In addition, the wines of this appellation must be aged for a minimum of twelve months before being marketed
                                            <br></br>
                                            Bordeaux-supérieur is a French appellation d'origine contrôlée wine produced like the Bordeaux appellation throughout the Bordeaux vineyards, but it includes wines from older vines. In addition, the wines of this appellation must be aged for a minimum of twelve months before being marketed
                                                            </p>


                                                        </div>
                                                        
                                                    </article>
                                        </div>                    
                                        <div className='text-center'>
                                            <img className='w-full h-auto mx-auto' src={bordeauxMachine} alt="Armagnac Bottle" />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 gap-4'>
                                            <p className="font-Trojan text-base font-normal text-base  xs:text-ambition-text-color sm:text-ambition-text-color text-justify px-4">
                                            Description : Wine of rich elegance, displaying a ruby hue with alluring garnet highlights. This wine captivates with a ruby color and garnet reflections. Its intense nose combines fruit brandy and delicate mocha coffee notes, while the palate offers an easy-drinking experience, featuring discreet tannins and a warm, alcoholic finish.
                                                            <br></br>
                                                            Color : Bright, straw-yellow color with numerous legs running down the glass. <br></br>

                                                            Nose : Initially, there are notes of fresh white-fleshed fruits, such as grapes and peaches. Slightly woody, with slight hints of flowers like hawthorn and linden blossom, finishing with scents of licorice.<br></br>

                                                            Palate : Begins with a bold attack featuring pastry-like, buttery flavors, followed by a smooth, indulgent character.

                                            
                                            </p>
                                    </div>
                            </div>
                            

                    </div>
             </div>
  
  </div>
  </div>
  
  );
};
export default Bordeauxsuperieur;
