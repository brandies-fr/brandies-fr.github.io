import React from 'react'
import HamburgerMenu from '../components/HamburgerMenu';
// import { HeaderIcons } from '../components/HeaderIcons';
import whoweareImg from '../assets/images/whoweare-img.png';
import whoweareBg from "../assets/images/whoweare-bg.jpg";
import whoweareBgres from "../assets/images/whoweare-responsive-bg.jpg";
import smoke from '../assets/video/smoke.mp4';
export const Whoweare = () => {
  return (
    <div>
      <HamburgerMenu/>
      {/* <HeaderIcons/> */}
    {/* <Navbar /> */}
        {/* Header Section */}
        
       <div   style={{
                              '--md-img': `url(${whoweareBg})`,
                              '--xs-img': `url(${whoweareBgres})`,
                              '--sm-img': `url(${whoweareBgres})`,
                            }}
                            className="xs:bg-[image:var(--xs-img)] sm:bg-[image:var(--sm-img)] md:bg-[image:var(--md-img)]  relative w-full h-full md:h-screen lg-h:full xl:h-screen bg-cover bg-center bg-no-repeat  relative overflow-hidden"  >           
                            <video muted={true} autoPlay={true} playsInline={true} loop={true} className='  absolute smoke_video '  >
                              <source src={smoke} type="video/mp4" />                          
                             
                          </video>
              <div className='container mx-auto p-10 text-center  pt-20'>
                  <div className="grid grid-cols-1 gap-4   md:grid-cols-[65%_auto] ">
                  <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center  pt-20'>                                                                           
                                  <p className="font-Trojan text-base font-semibold
                                  text-ambition-text-color 
                                  first-line:tracking-widest first-letter:text-7xl 
                                  first-letter:font-bold
                                   first-letter:text-ambition-text-color 
                                   dark:first-letter:text-ambition-text-color 
                                   first-letter:me-3 first-letter:float-start 
                                   text-justify">
  Nested in Cognac, the spirit valley of France, Brandies is a distinguished purveyor of exquisite French wines and spirits, embracing the artistry of aging and blending. <br /><br />Carefully nurturing the finest ingredients to create remarkable libations, our collection embodies the essence of France and French culture, with each bottle encapsulating the rich heritage, timeless traditions, and a deep passion for perfection that captivate human senses.
</p>
<p className="font-Trojan text-base font-semibold xs:text-ambition-text-color sm:text-ambition-text-color text-justify">
  Our collection is a celebration of elegance, where the past and present converge to deliver an unparalleled experience. Explore a world of indulgence and savor the opulence of Brandies.
</p>

                                    </div>
                                    
                                  </article>
                            <div className=' grid grid-cols-1 gap-4 place-items-center '>
                            
                                    <img className='w-full h-auto'  src={whoweareImg} />
                              </div>                            
                    </div>
                </div>           
        </div>
</div>
  )
}
export default Whoweare;
