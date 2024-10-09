import React from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import BrochureIcon from '../components/BrochureIcon';
import cognacLogo from '../assets/images/cognac-logo.png'
import cognacBottle from '../assets/images/cognac-bottle1.png'
import homeBg from '../assets/images/product-single-bg.jpg';
import homebgRes from '../assets/images/armagnac-single-page-res.jpg';
import smoke from '../assets/video/smoke.mp4';
import cognacMachine from '../assets/images/cognac-machine.png'

export const Cognac = () => {
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
                                        <img className='w-6/12 h-auto mx-auto md:w-5/12 md:h-auto' src={cognacLogo} alt="Armagnac Logo" />
                                </div>                    
                                <div className='text-center'>
                                    <img className='w-full h-auto mx-auto' src={cognacBottle} alt="Armagnac Bottle" />
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
                                                              The Cognac appellations are exclusively reserved for brandies made from wines harvested and distilled in the well-defined territories of Charente Maritime, Charente, some communes of the Deux-Sèvres and Dordogne. The grape juice comes from white grape 
                                            varieties, mainly ugni blanc, but there are also colombard, folle-blanche... in small quantities. Immediately after the harvest, the grapes are pressed and the must is fermented. The chaptalization is forbidden.
                                            <br></br>
                                            It is the double distillation and the ageing in oak barrels that will transform it into cognac. After 5 to 7 days, we obtain a low alcohol wine (around 8° to 11°) acid and cloudy, not very pleasant to drink as it is. 
                                                            </p>


                                                        </div>
                                                        
                                                    </article>
                                        </div>                    
                                        <div className='text-center'>
                                            <img className='w-full h-auto mx-auto' src={cognacMachine} alt="Armagnac Bottle" />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 gap-4'>
                                            <p className="font-Trojan text-base font-normal text-sm  xs:text-ambition-text-color sm:text-ambition-text-color text-justify px-4">
                                            Description : A radiant, straw-yellow cognac graced with a gentle, non-alcoholic allure. Nose is delighted starting from a white-fleshed fruit aromas, accompanied by a nuanced interplay of woody undertones and delicate florals. The palate delights with bold yet a buttery introduction, enriched by subtle pear notes and a warm, spicy crescendo.
                                                            <br></br><br></br>
                                                            Color : Bright, straw-yellow color with numerous legs running down the glass.<br></br>

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
export default Cognac;
