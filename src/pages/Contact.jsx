import React from 'react'
import HamburgerMenu from '../components/HamburgerMenu';
import BrochureIcon from "../components/BrochureIcon";
// import { HeaderIcons } from '../components/HeaderIcons';
import contactMap from '../assets/images/contact-map.png';
import whoweareBg from "../assets/images/whoweare-bg.jpg";
import whoweareBgres from "../assets/images/whoweare-responsive-bg.jpg";
export const Contact = () => {
  return (
    <div>
      <HamburgerMenu/>
      <BrochureIcon/>
      {/* <HeaderIcons/> */}
 
      <div
  style={{
    '--md-img': `url(${whoweareBg})`,
    '--xs-img': `url(${whoweareBgres})`,
    '--sm-img': `url(${whoweareBgres})`,
  }}
  className="relative
   w-full h-screen 
   xs:h-screen 
   sm:h-auto 
   md:h-screen 
   lg:h-screen 
   xl:h-screen
    bg-cover bg-center 
    bg-no-repeat 
    xs:bg-[image:var(--xs-img)] 
    sm:bg-[image:var(--sm-img)]
     md:bg-[image:var(--md-img)]
      pt-12"
>
  <div className="container mx-auto p-10 text-center h-full flex flex-col justify-center relative ">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[65%_auto]">
      <article className="text-wrap">
        <div className="grid grid-cols-1 gap-4 place-items-center">
          <p className="font-Trojan xs:text-xl text-2xl font-medium text-ambition-text-color text-center">
            Societe Brandies<br />
            78 Avenue des Champs Elysees <br />
            Paris 75008 France.<br /><br />
            Email: info@brandies.fr<br />
            Mob: +33 7 80 91 10 65.<br />
            Fixe: +33 9 70 44 00 55.
          </p>
        </div>
      </article>
      <div className="grid grid-cols-1 gap-4 place-items-center">
        <img className="w-full h-auto xs: 6/12 sm:w-6/12 md:w-full  lg:w-full  xl:w-full" src={contactMap} alt="Contact Map" />
      </div>
    </div>
  </div>
</div>

</div>
  )
}
export default Contact;

