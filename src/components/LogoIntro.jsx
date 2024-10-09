import React, { useEffect, useState, useRef } from 'react';
import logowebm from "../assets/video/brandies.webm";
import logomov from "../assets/video/brandies.mov";
import mobileLogomp4 from "../assets/video/mobile-logo-withbg.mp4";
import homeBg from '../assets/images/homepage-bg.jpg';
import homebgRes from '../assets/images/home-mob-res.jpg';
// import logoImg from '../assets/images/mobile-logo.png';
// import homeGrapes from '../assets/images/home-grapes.png';
// import homeSmoke from '../assets/images/home-smoke.png';
import smoke from '../assets/video/smoke.mp4';
import BrochureIcon from "../components/BrochureIcon";


export const LogoIntro = () => {
<BrochureIcon/>
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [videoEnded, setVideoEnded] = useState(false); // State to track video end
  const videoContainerRef = useRef(null); // Ref to video container

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleVideoEnded = () => {
      setVideoEnded(true); // Update state when video ends
    };

    if (videoContainerRef.current) {
      const videoElement = videoContainerRef.current.querySelector('video');
      if (videoElement) {
        videoElement.addEventListener('ended', handleVideoEnded);
      }
    }

    return () => {
      if (videoContainerRef.current) {
        const videoElement = videoContainerRef.current.querySelector('video');
        if (videoElement) {
          videoElement.removeEventListener('ended', handleVideoEnded);
        }
      }
    };
  }, []);

  const mobileVideoHTML = `
    <video
      muted
      autoplay
      playsinline
      class="w-full h-screen absolute object-cover "
      style="pointer-events: none;"
    >
      <source src="${mobileLogomp4}" type="video/mp4" />
    </video>
  `;

  const desktopVideoHTML = `
    <video
      muted
      autoplay
      playsinline
      class="w-full h-screen absolute object-cover -top-12"
      style="pointer-events: none;"
    >
      <source src="${logomov}" type="video/mp4; codecs=hvc1" />
      <source src="${logowebm}" type="video/webm" />
    </video>
  `;

  return (
    <div
      style={{
        '--xs-img': `url(${homebgRes})`,
        '--sm-img': `url(${homebgRes})`,
        '--md-img': `url(${homeBg})`,
      }}
      className='relative xs:bg-[image:var(--xs-img)] sm:bg-[image:var(--sm-img)] md:bg-[image:var(--md-img)] bg-home-bg bg-[#2b1809] w-full h-screen sm:min-h-screen sm:h-screen xs:min-h-screen xs:h-auto object-cover bg-cover bg-center bg-no-repeat overflow-hidden'
    >
      <video muted={true} autoPlay={true} playsInline={true} loop={true} className='absolute smoke_video z-50' style={{ pointerEvents: 'none' }}>
        <source src={smoke} type="video/mp4" />
      </video>
      {/* <img src={homeGrapes} alt="" className='home-grapes z-50' /> */}
      {isMobile ? (
         (
          <div ref={videoContainerRef} dangerouslySetInnerHTML={{ __html: mobileVideoHTML }} />
        )
      ) : (
        <div dangerouslySetInnerHTML={{ __html: desktopVideoHTML }} />
      )}

      {/* Conditional rendering for the image */}
      {/* {isMobile && window.innerWidth <= 800 && (
        <img src={homeSmoke} alt="" className='home-smoke z-40' />
      )} */}
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





// import React, { useEffect, useState, useRef } from 'react';
// import logowebm from "../assets/video/brandies.webm";
// import logomov from "../assets/video/brandies.mov";
// import mobileLogomp4 from "../assets/video/mobile-logo-withbg.mp4";
// import homeBg from '../assets/images/homepage-bg.jpg';
// import homebgRes from '../assets/images/home-mob-res.jpg';
// import logoImg from '../assets/images/mobile-logo.png';
// import homeGrapes from '../assets/images/home-grapes.png';
// import homeSmoke from '../assets/images/home-smoke.png';
// import smoke from '../assets/video/smoke.mp4';

// export const LogoIntro = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
//   const [key, setKey] = useState(0); // Key to force re-render
//   const [videoEnded, setVideoEnded] = useState(false); // State to track video end
//   const videoRef = useRef(null); // Ref to video element

//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth <= 1024;
//       setIsMobile(mobile);
//       setKey(prevKey => prevKey + 1); // Change key to force re-render
//     };

//     const handleVideoEnded = () => {
//       setVideoEnded(true); // Update state when video ends
//     };

//     window.addEventListener('resize', handleResize);
    
//     // Add event listener for video end
//     if (videoRef.current) {
//       videoRef.current.addEventListener('ended', handleVideoEnded);
//     }

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (videoRef.current) {
//         videoRef.current.removeEventListener('ended', handleVideoEnded);
//       }
//     };
//   }, []); // Empty dependency array ensures effect runs only once on mount

//   return (
//     <div
//       style={{
//         '--xs-img': `url(${homebgRes})`,
//         '--sm-img': `url(${homebgRes})`,
//         '--md-img': `url(${homeBg})`,
//       }}
//       className='relative xs:bg-[image:var(--xs-img)] sm:bg-[image:var(--sm-img)] md:bg-[image:var(--md-img)] bg-home-bg bg-[#2b1809] w-full h-screen sm:min-h-screen sm:h-screen xs:min-h-screen xs:h-auto object-cover bg-cover bg-center bg-no-repeat overflow-hidden'
//     >
//       <video muted={true} autoPlay={true} playsInline={true} loop={true} className='  absolute smoke_video z-50'  >
//           <source src={smoke} type="video/mp4" />
//       </video>
//      <img src={homeGrapes} alt=""  className='home-grapes z-50'/>
//      {/* <img src={homeSmoke} alt=""  className='home-smoke  z-40'/> */}
//       {isMobile ? (
//         videoEnded ? (           
//           <img src={logoImg} alt="Logo" className="absolute mobile-logo-img" />    
//         ) : (
//           <video
//             ref={videoRef}
//             key={key} // Use key to force re-render
//             muted
//             autoPlay={true}
//             playsInline
//             loop={false}
//             className="w-full h-screen absolute object-cover transition-opacity duration-3000"
//           >
//             <source src={mobileLogomp4} type="video/mp4" />
//           </video>
//         )
//       ) : (
    
//         <video
//           ref={videoRef}
//           key={key} // Use key to force re-render
//           muted
//           autoPlay={true}
//           playsInline
//           loop={false}
//           className="w-full h-screen absolute object-cover -top-12"
//         >
//           <source src={logomov} type="video/mp4; codecs=hvc1" />
//           <source src={logowebm} type="video/webm" />
//         </video>
//       )}
//       {/* Conditional rendering for the image */}
//       {isMobile && window.innerWidth <= 800 && (
//         <img src={homeSmoke} alt="" className='home-smoke z-40' />
//       )}
//       <article className="relative z-10 text-wrap">
     
//         <div className='flex flex-col justify-center items-center h-screen px-5'>
//           <div className='grid gap-4 place-items-center' style={{ paddingTop: '50vh' }}>
//             <p className='font-Civilite text-ambition-text-color text-center text-4xl xs:text-3xl sm:3xl'>
//               An artistry of Winemaking, Distillation, and the alchemy of Aging and Blending, <br />infused with the essence of French Authenticity, <br />Tradition, and Passion.
//             </p>
//             <p className='font-Trojan w-full text-ambition-text-color text-center text-2xl xs:text-xl sm:xl'>
//               Vinification | Distillation | Aging | Blending
//             </p>
//           </div>
//         </div>
         
//       </article>
//     </div>
//   );
// };

// export default LogoIntro;


