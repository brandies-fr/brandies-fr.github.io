import React from 'react';
import img1  from '../assets/images/brochure/en/1.jpg';
import img2  from '../assets/images/brochure/en/2.jpg';

function Brochure() {
  return (
    <div  width="100%" height="100%" className='bg-screen'>
    
    {/* <div id="portrait" class="center-screen">
       <img src="images/rotate-mobile.png" />
       <h2>Please rotate your mobile & Make sure Auto-rotate options is switched on in your mobile setting.</h2>
    </div> */}
    <div id="">
       {/* <header id="landscape-nav">
          <nav>
             <ul>
                <li><a href="#" class="border-right " id="btn">Fullscreen</a></li>
                <li><a href="https://brandies.fr"  class="border-right">Website</a></li>
                <li>
                   <a href="#">Download</a>
                   <ul class="submenu">
                      <li><a href="./PDF/<?php echo $lang['img_url'] ?>/Brandies_Brochure_Low.pdf" target="_blank">4.5MB</a></li>
                      <li><a href="./PDF/<?php echo $lang['img_url'] ?>/Brandies_Brochure_Medium.pdf" target="_blank">10.5MB</a></li>
                      <li><a href="./PDF/<?php echo $lang['img_url'] ?>/Brandies_Brochure_High.pdf" target="_blank">18.5MB</a></li>
                   </ul>
                </li>
             </ul>
          </nav>
       </header> */}
   

  {/* <div class ="center-screen "> 
     <button id="btn-fullscreen"  class="btn-screen" >Fullscreen</button> 
     <span  style={{ height: '15px', border: '1px solid #ddd' }} id="fullscreen-divider">|</span>      
      <button id="btn-normalscreen" class="btn-screen">Normal Screen</button>
  </div> */}


   
       <div id="">
          <button id="prev-btn" >
          <i class="fa fa-arrow-circle-left"></i>
          </button>
        
          <div id="book" class="book">       
             <div id="first" class="paper">
                <div class="front">
                   <div id="f1" class="front-content">                    
                      <img src={img1}  />
                   </div>
                </div>
                <div class="back">
                   <div id="b1" class="back-content">
                      <img src={img2} alt="" />
                   </div>
                </div>
             </div>
            
             <div id="p2" class="paper">
                <div class="front">
                   <div id="f2" class="front-content">
                      <img src="../brochure/images/en/jpg/3.jpg" alt="" />
                   </div>
                </div>
                <div class="back">
                   <div id="b2" class="back-content">
                      <img src="../brochure/images/en/jpg/4.jpg" alt="" />
                   </div>
                </div>
             </div>
           
             <div id="p3" class="paper">
                <div class="front">
                   <div id="f3" class="front-content">
                      <img src="../brochure/images/en/jpg/5.jpg" alt="" />
                   </div>
                </div>
                <div class="back">
                   <div id="b3" class="back-content">
                      <img src="../brochure/images/en/jpg/6.jpg" alt="" />
                   </div>
                </div>
             </div>
         
             <div id="p4" class="paper">
                <div class="front">
                   <div id="f4" class="front-content">
                      <img src="../brochure/images/en/jpg/7.jpg" alt="" />
                   </div>
                </div>
                <div class="back">
                   <div id="b4" class="back-content">
                      <img src="../brochure/images/en/jpg/8.jpg" alt="" />
                   </div>
                </div>
             </div>
         
             <div id="p5" class="paper">
                <div class="front">
                   <div id="f5" class="front-content">
                      <img src="../brochure/images/en/jpg/9.jpg" alt="" />
                   </div>
                </div>
                <div class="back">
                   <div id="b5" class="back-content">
                      <img src="../brochure/images/en/jpg/10.jpg" alt="" />
                   </div>
                </div>
             </div>
            
             <div id="p6" class="paper">
                <div class="front">
                   <div id="f6" class="front-content">
                      <img src="../brochure/images/en/jpg/11.jpg" alt="" />
                   </div>
                </div>
                <div class="back">
                   <div id="b6" class="back-content">
                      <img src="../brochure/images/en/jpg/12.jpg" alt="" />
                   </div>
                </div>
             </div>
            
             <div id="p7" class="paper">
                <div class="front">
                   <div id="f7" class="front-content">
                      <img src="../brochure/images/en/jpg/13.jpg" alt="" />
                   </div>
                </div>
                <div class="back">
                   <div id="b7" class="back-content">
                      <img src="../brochure/images/en/jpg/14.jpg" alt="" />
                   </div>
                </div>
             </div>
             
             <div id="p8" class="paper">
                <div class="front">
                   <div id="f8" class="front-content">
                      <img src="../brochure/images/en/jpg/15.jpg" alt="" />
                   </div>
                </div>
                <div class="back">
                   <div id="b8" class="back-content">
                      <img src="../brochure/images/en/jpg/16.jpg" alt="" />
                   </div>
                </div>
             </div>
             
             <div id="p9" class="paper">
                <div class="front">
                   <div id="f9" class="front-content">
                      <img src="../brochure/images/en/jpg/17.jpg" alt="" />
                   </div>
                </div>
                <div class="back">
                   <div id="b9" class="back-content">
                      <img src="../brochure/images/en/jpg/18.jpg" alt="" />
                   </div>
                </div>
             </div>
          
             <div id="last" class="paper">
                <div class="front">
                   <div id="f-last" class="front-content">
                      <img src="../brochure/images/en/jpg/19.jpg" alt="" />
                   </div>
                </div>
               
                <div class="back">
                   <div id="b-last" class="back-content" >
                      <img src="../brochure/images/en/jpg/cover-last.jpg" alt="" />
                   </div>
                </div>
             </div>
          </div>
        
          <button id="next-btn" >
          <i class="fa fa-arrow-circle-right"></i>
          </button>
          <div class="center-menu">
             <div class ="brochure-text "> 
                <a href="?lang=en"  >English</a>
                <button id="homeBtn" class="divider-border" >
                <i class="fa fa-home fa-4x"></i>
                </button>
                <a href="?lang=fr">French</a>
             </div>
          </div>
       </div>
    </div>
    {/* <script src="js/fullscreen.js"></script> */}
 </div>
  )
}

export default Brochure