
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
      <title>Brandies Brochure</title>
      <!-- Add the apple-mobile-web-app-capable meta tag -->
  <meta name="apple-mobile-web-app-capable" content="yes">

<!-- Additional meta tags for iOS -->
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="Brandies Brochure">

<!-- Favicon for standalone mode -->
<link rel="apple-touch-icon" href="./images/favicon.ico">
      <link rel="icon" type="image/x-icon" href="./images/favicon.ico">
      <link rel="stylesheet" href="style.css">
      <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
      <script src="./main.js" defer></script>
      <script src="https://kit.fontawesome.com/b0f29e9bfe.js" crossorigin="anonymous"></script>
   </head>
   <body  width="100%" height="100%" onload="loadingLogo();">
      <div id="loading-logo"></div>
      <div id="portrait" class="center-screen">
         <img src="images/rotate-mobile.png">
         <h2>Please rotate your mobile & Make sure Auto-rotate options is switched on in your mobile setting.</h2>
      </div>
      <div id="">
         <header id="landscape-nav">
            <nav>
               <ul>
                  <li><a href="#" class="border-right " id="btn">Fullscreen</a></li>
                  <li><a href="https://brandies.fr"  class="border-right">Website</a></li>
                  <li>
                     <a href="#">Download</a>
                     <ul class="submenu">
                        <li><a href="./PDF/en/Brandies_Brochure_Low.pdf" target="_blank">4.5MB</a></li>
                        <li><a href="./PDF/en/Brandies_Brochure_Medium.pdf" target="_blank">10.5MB</a></li>
                        <li><a href="./PDF/en/Brandies_Brochure_High.pdf" target="_blank">18.5MB</a></li>
                     </ul>
                  </li>
               </ul>
            </nav>
         </header>
         <!-- Full screen / Normal screen button -->
         <!-- <div class = "center-screen"> -->
         <!-- <button  id="btn-fullscreen">Fullscreen</button> -->
        <!-- </div> -->

    <div class ="center-screen "> 
       <button id="btn-fullscreen"  class="btn-screen" >Fullscreen</button> 
       <span style="height:15px; border= 1px solid #ddd;" id="fullscreen-divider">|</span>      
        <button id="btn-normalscreen" class="btn-screen">Normal Screen</button>
    </div>


         <!-- Previous Button -->
         <div id="landscape-brochure">
            <button id="prev-btn" >
            <i class="fa fa-arrow-circle-left"></i>
            </button>
            <!-- Book -->
            <div id="book" class="book">
               <!-- Paper 1 -->
               <div id="first" class="paper">
                  <div class="front">
                     <div id="f1" class="front-content">
                        <!-- <h1>Front 1</h1> -->
                        <img src="./images/en/jpg/1.jpg" >
                     </div>
                  </div>
                  <div class="back">
                     <div id="b1" class="back-content">
                        <img src="./images/en/jpg/2.jpg" alt="" >
                     </div>
                  </div>
               </div>
               <!-- Paper 2 -->
               <div id="p2" class="paper">
                  <div class="front">
                     <div id="f2" class="front-content">
                        <img src="./images/en/jpg/3.jpg" alt="" >
                     </div>
                  </div>
                  <div class="back">
                     <div id="b2" class="back-content">
                        <img src="./images/en/jpg/4.jpg" alt="" >
                     </div>
                  </div>
               </div>
               <!-- Paper 3 -->
               <div id="p3" class="paper">
                  <div class="front">
                     <div id="f3" class="front-content">
                        <img src="./images/en/jpg/5.jpg" alt="" >
                     </div>
                  </div>
                  <div class="back">
                     <div id="b3" class="back-content">
                        <img src="./images/en/jpg/6.jpg" alt="" >
                     </div>
                  </div>
               </div>
               <!-- Paper 4 -->
               <div id="p4" class="paper">
                  <div class="front">
                     <div id="f4" class="front-content">
                        <img src="./images/en/jpg/7.jpg" alt="" >
                     </div>
                  </div>
                  <div class="back">
                     <div id="b4" class="back-content">
                        <img src="./images/en/jpg/8.jpg" alt="" >
                     </div>
                  </div>
               </div>
               <!-- Paper 5 -->
               <div id="p5" class="paper">
                  <div class="front">
                     <div id="f5" class="front-content">
                        <img src="./images/en/jpg/9.jpg" alt="" >
                     </div>
                  </div>
                  <div class="back">
                     <div id="b5" class="back-content">
                        <img src="./images/en/jpg/10.jpg" alt="" >
                     </div>
                  </div>
               </div>
               <!-- Paper 6 -->
               <div id="p6" class="paper">
                  <div class="front">
                     <div id="f6" class="front-content">
                        <img src="./images/en/jpg/11.jpg" alt="" >
                     </div>
                  </div>
                  <div class="back">
                     <div id="b6" class="back-content">
                        <img src="./images/en/jpg/12.jpg" alt="" >
                     </div>
                  </div>
               </div>
               <!-- Paper 7 -->
               <div id="p7" class="paper">
                  <div class="front">
                     <div id="f7" class="front-content">
                        <img src="./images/en/jpg/13.jpg" alt="" >
                     </div>
                  </div>
                  <div class="back">
                     <div id="b7" class="back-content">
                        <img src="./images/en/jpg/14.jpg" alt="" >
                     </div>
                  </div>
               </div>
               <!-- Paper 8 -->
               <div id="p8" class="paper">
                  <div class="front">
                     <div id="f8" class="front-content">
                        <img src="./images/en/jpg/15.jpg" alt="" >
                     </div>
                  </div>
                  <div class="back">
                     <div id="b8" class="back-content">
                        <img src="./images/en/jpg/16.jpg" alt="" >
                     </div>
                  </div>
               </div>
               <!-- Paper 9 -->
               <div id="p9" class="paper">
                  <div class="front">
                     <div id="f9" class="front-content">
                        <img src="./images/en/jpg/17.jpg" alt="" >
                     </div>
                  </div>
                  <div class="back">
                     <div id="b9" class="back-content">
                        <img src="./images/en/jpg/18.jpg" alt="" >
                     </div>
                  </div>
               </div>
               <!-- Last Page -->
               <div id="last" class="paper">
                  <div class="front">
                     <div id="f-last" class="front-content">
                        <img src="./images/en/jpg/19.jpg" alt="" >
                     </div>
                  </div>
                  <!-- lastpage -->
                  <div class="back">
                     <div id="b-last" class="back-content" >
                        <img src="./images/en/jpg/cover-last.jpg" alt="" >
                     </div>
                  </div>
               </div>
            </div>
            <!-- Next Button -->
            <button id="next-btn" >
            <i class="fa fa-arrow-circle-right"></i>
            </button>
            <div class="center-menu">
               <div class ="brochure-text "> 
                  <!-- <a href="?lang=en"  >English</a> -->
                  <button id="homeBtn" class="divider-border" >
                  <i class="fa fa-home fa-4x"></i>
                  </button>
                  <!-- <a href="?lang=fr">French</a> -->
               </div>
            </div>
         </div>
      </div>
      <script src="js/fullscreen.js"></script>
   </body>
   <!-- Pre Loader -->
   <script>
      var preloader = document.getElementById("loading-logo");
      function loadingLogo(){
         preloader.style.display = 'none';
      }
   </script>
</html>