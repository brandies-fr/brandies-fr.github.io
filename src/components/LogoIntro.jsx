import React from 'react'
import logoanimation from "../assets/video/sample.mp4"
import logowebm from "../assets/video/brandies.webm"
import logomov from "../assets/video/brandies.mov"
import kodi from "../assets/images/kodi.png"
// import { Navbar } from './Navbar'
export const LogoIntro = () => {
  return (
    
    <div className='logointro'>
        {/* <video src= {logoanimation} autoPlay muted loop /> */}
        {/* <Navbar /> */}
        <video  autoPlay muted  >
            <source src={logomov} type="video/mp4; codecs=hvc1" />
             <source src= {logowebm} type="video/webm" />
        </video> 
           {/* <img src={kodi} className='kodi' /> */}
           <div className="h-content">
            <p className="home_content_show">
            An artistry of Winemaking, Distillation, and the alchemy of Aging and Blending, infused with the essence of french Authenticity, Tradition, and Passion.
              <div className="wine-type" >
               Vinification | Distillation | Aging | Blending
               </div>
            </p>
            </div> 
    </div>
  )
}
