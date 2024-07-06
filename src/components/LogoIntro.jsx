import React from 'react';
import logowebm from "../assets/video/brandies.webm";
import logomov from "../assets/video/brandies.mov";
import mobileLogo from "../assets/video/mobile-logo.webm";
import mobileLogomov from "../assets/video/mobile-logo-withbg.mp4";
import homeBg from '../assets/images/homepage-bg.jpg';
import homebgRes from '../assets/images/home-mob-res.jpg';

export const LogoIntro = () => {
  // Function to check if the screen size is mobile
  const isMobile = () => {
    return window.innerWidth <= 450; 
  };
  // const videoClass = isMobile() && mobileLogomov ? 'my-video' : '';

  return (
    <div
    style={{
      '--xs-img': `url(${homebgRes})`,
      '--sm-img': `url(${homebgRes})`,
      '--md-img': `url(${homeBg})`,
    }}
    className='relative xs:bg-[image:var(--xs-img)] sm:bg-[image:var(--sm-img)] md:bg-[image:var(--md-img)] bg-home-bg bg-[#2b1809] w-full h-screen sm:min-h-screen sm:h-screen xs:min-h-screen xs:h-auto bg-cover bg-center bg-no-repeat overflow-hidden'
  >
    <video muted={true} autoPlay={true} playsInline={true} loop={false}  className={`w-full h-screen absolute ${isMobile() ? 'object-cover' : 'object-cover -top-12'}`}>
      {isMobile() ? (
        <>
        <source src={mobileLogomov} type="video/mp4" />
        <source src={mobileLogo} type="video/webm" />
        </>
        
      ) : (
        <>
          <source src={logomov} type="video/mp4; codecs=hvc1" />
          <source src={logowebm} type="video/webm" />
        </>
      )}
    </video>
  
    <article className="relative z-10 text-wrap">
      <div className='flex flex-col justify-center items-center h-screen px-5'>
        <div className='grid gap-4 place-items-center' style={{ paddingTop: '50vh' }}>
          <p className='font-Civilite text-ambition-text-color text-center text-4xl xs:text-3xl sm:3xl'>
            An artistry of Winemaking, Distillation, and the alchemy of Aging and Blending, <br />infused with the essence of French Authenticity, <br />Tradition, and Passion.
          </p>
          <p className='font-Trojan w-full text-ambition-text-color text-center text-2xl xs:text-xl sm:xl'>
            Vinification | Distillation | Aging | Blending
          </p>
        </div>
      </div>
    </article>
  </div>
  
  );
};

export default LogoIntro;


// Condition based redirect videos 
// export const LogoIntro = () => {
//   // Function to check if the screen size is mobile
//   const isMobile = () => {
//     return window.innerWidth <= 450; 
//   };

//   return (
//     <>
//       <div className='bg-home-bg bg-[#2b1809] w-full h-screen sm:min-h-screen sm:h-screen xs:min-h-screen xs:h-auto bg-cover bg-center bg-no-repeat'>
//         <video muted={true} autoPlay={true} playsInline={true} loop={false}>
//           {/* Conditionally render video sources */}
//           {isMobile() ? (
//             <>
//               <source src={logowebm} type="video/webm" />
//               <source src={logomovMobile} type="video/mp4; codecs=hvc1" />
//             </>
//           ) : (
//             <>
//               <source src={logomov} type="video/mp4; codecs=hvc1" />
//               <source src={logowebm} type="video/webm" />
//             </>
//           )}
//         </video>
//       </div>
//     </>
//   );
// };
