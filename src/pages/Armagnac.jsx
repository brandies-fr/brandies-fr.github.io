import React from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import armagnacLogo from '../assets/images/armagnac-logo.png'
import armagnacBottle from '../assets/images/armagnac.png'
import homeBg from '../assets/images/product-single-bg.jpg';
import homebgRes from '../assets/images/armagnac-single-page-res.jpg';
import smoke from '../assets/video/smoke.mp4';
import armagnacMachine from '../assets/images/armagnac-machine.png'

export const Armagnac = () => {
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
    className='relative xs:bg-[image:var(--xs-img)] sm:bg-[image:var(--sm-img)] md:bg-[image:var(--md-img)] bg-home-bg bg-[#2b1809] w-full h-screen xs:min-h-screen xs:h-auto sm:min-h-screen sm:h-screen md:min-h-screen md:h-auto  bg-center bg-no-repeat  ' >
            <video muted={true} autoPlay={true} playsInline={true} loop={true} className='  absolute smoke_video  scale-x-[-1]'  >
                <source src={smoke} type="video/mp4" /> 
             </video>
             <div className='container mx-auto text-center'>
             <div className="grid grid-cols-1 gap-4   lg:grid-cols-[30%_auto] ">
                    {/* Left */}
                            <div className=' grid grid-cols-1 gap-4 items-center justify-center  lg:bg-black lg:bg-opacity-50 lg:h-screen'>
                                <div className='text-center'>
                                        <img className='w-6/12 h-auto mx-auto md:w-5/12 md:h-auto' src={armagnacLogo} alt="Armagnac Logo" />
                                </div>                    
                                <div className='text-center'>
                                    <img className='w-10/12 h-auto mx-auto' src={armagnacBottle} alt="Armagnac Bottle" />
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
                                                    text-justify px-4">
                                                            Description : Exquisite Armagnac with pale gold hue and refreshing, floral notes on the nose invite you to a delightful experience. The palate reveals a pleasing and lively character, accentuated by vibrant lemony notes, making it a perfect choice for those seeking a bright and refreshing indulgence.
                                                            <br></br><br></br>
                                                            Color : Amber, pale gold.<br></br>
                                                            Nose : Fresh, with floral notes.<br></br>
                                                            Palate : Pleasant and lively with hints of lemon and honey.
                                                            </p>


                                                        </div>
                                                        
                                                    </article>
                                        </div>                    
                                        <div className='text-center'>
                                            <img className='w-full h-auto mx-auto' src={armagnacMachine} alt="Armagnac Bottle" />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 gap-4'>
                                            <p className="font-Trojan text-base font-normal xs:text-ambition-text-color sm:text-ambition-text-color text-justify px-4">
                                            Of all brandies, Armagnac is certainly the most precious and richest. Indeed, this Gascony speciality, born in the Gers region more than 700 years ago, is still elaborated according to an ancestral know-how in the greatest respect of the traditional method. Ageing is one of the key stages in the making of Armagnac: as the years go by in wood, the crystalline eau-de-vie becomes richer in color, texture, but above all in fragrance.
                                            <br></br>
                                            Armagnac is kept in wood barrels for many years, and the longer the maturation, the more rich and complex the brandy becomes. Whatever its age, Armagnac is a real pleasure to taste, whether you like it fiery and warm, or fine and intense.
                                            </p>
                                    </div>
                            </div>
                            

                    </div>
             </div>
  
  </div>
  </div>
  
  );
};
export default Armagnac;
