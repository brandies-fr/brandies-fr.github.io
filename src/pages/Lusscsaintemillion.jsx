import React from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import BrochureIcon from "../components/BrochureIcon";
import saintemillionLogo from '../assets/images/saintemillion-logo.png'
import saintemillionBottle from '../assets/images/saint-emilion-bottle1.png'
import homeBg from '../assets/images/product-single-bg.jpg';
import homebgRes from '../assets/images/armagnac-single-page-res.jpg';
import smoke from '../assets/video/smoke.mp4';
import saintemillionMachine from '../assets/images/saintemillion-machine.png'

export const Lusscsaintemillion = () => {
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
                                        <img className='w-7/12 h-auto mx-auto md:w-5/12 md:h-auto' src={saintemillionLogo} alt="Armagnac Logo" />
                                </div>                    
                                <div className='text-center'>
                                    <img className='w-10/12 h-auto mx-auto' src={saintemillionBottle} alt="Armagnac Bottle" />
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
                                                    text-justify px-4 text-base">
                                                           Saint-Emilion is a French red wine with a controlled designation of origin produced around the town of Saint-Emilion ,Gironde. It is part of the Bordeaux vineyard. 
                                            <br></br>
                                            The wines of Saint-Emilion are a blend of different grape varieties. The three main ones are Merlot 60% of the vineyard, Cabernet Franc or bouchet, nearly 30 and Cabernet Sauvignon about 10.
                                                            </p>


                                                        </div>
                                                        
                                                    </article>
                                        </div>                    
                                        <div className='text-center'>
                                            <img className='w-full h-auto mx-auto' src={saintemillionMachine} alt="Armagnac Bottle" />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 gap-4'>
                                            <p className="font-Trojan text-base font-normal text-base  xs:text-ambition-text-color sm:text-ambition-text-color text-justify px-4">
                                            Description : Wine of remarkable character, boasting a deep, sustained purple hue. The delightful aroma offers sweet spices, brioche, and hints of white fruit, while the palate combines smooth yet powerful tannins with evolving oak nuances, resulting in a generous and fruit-rich wine.
                                                            <br></br><br></br>
                                                            Color : Beautiful sustained deep purple color. <br></br>

                                                            Nose : Hints of sweet spices, brioche and black fruit. <br></br>

                                                            Palate: Smooth and powerful tannins mixed with lovely oak tannins, which evolve constantly giving a fleshy generous wine with plenty of fruits.
                                            
                                            </p>
                                    </div>
                            </div>
                            

                    </div>
             </div>
  
  </div>
  </div>
  
  );
};
export default Lusscsaintemillion;

