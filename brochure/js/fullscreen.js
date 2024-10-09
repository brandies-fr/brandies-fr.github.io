

let myDocument = document.documentElement;
let btn = document.getElementById("btn");
let  landscapebrochure = document.getElementById("landscape-brochure");
let landscapenav = document.getElementById("landscape-nav");
let normalscreen = document.getElementById("btn-normalscreen");
let btnfullscreen = document.getElementById("btn-fullscreen");
let diveder = document.getElementById("fullscreen-divider")

//Rotate and click normal screen
normalscreen.addEventListener("click",()=>{
    landscapebrochure.style.display = 'block';
    landscapenav.style.display="block";
    if(document.exitFullscreen){
        document.exitFullscreen();
    }
    else if(document.msexitFullscreen){
        document.msexitFullscreen();
    }
    else if(document.mozexitFullscreen){
        document.mozexitFullscreen();
    }
    else if(document.webkitexitFullscreen){
        document.webkitexitFullscreen();
    }
    btn.textContent = "Fullscreen";
    // normalscreen.style.display="none";
    // btnfullscreen.style.display="none";
});

btn.addEventListener("click", ()=>{
    if(btn.textContent == "Fullscreen"){
        if(myDocument.requestFullscreen){
            myDocument.requestFullscreen();
        }
        else if(myDocument.msRequestFullscreen){
            myDocument.msRequestFullscreen();
        }
        else if(myDocument.mozRequestFullscreen){
            myDocument.mozRequestFullscreen();
        }
        else if(myDocument.webkitRequestFullscreen){
            myDocument.webkitEnterFullscreen();
        }
        btn.textContent = "Exit Fullscreen";
        landscapebrochure.style.display = 'block';
        landscapenav.style.display="block";
      }
// 
    else{
        if(document.exitFullscreen){
            document.exitFullscreen();
        }
        else if(document.msexitFullscreen){
            document.msexitFullscreen();
        }
        else if(document.mozexitFullscreen){
            document.mozexitFullscreen();
        }
        else if(document.webkitexitFullscreen){
            document.webkitexitFullscreen();
        }
        btn.textContent = "Fullscreen";
    }
});



btnfullscreen.addEventListener("click", ()=>{
    if(btnfullscreen.textContent == "Fullscreen"){
        if(myDocument.requestFullscreen){
            myDocument.requestFullscreen();
        }
        else if(myDocument.msRequestFullscreen){
            myDocument.msRequestFullscreen();
        }
        else if(myDocument.mozRequestFullscreen){
            myDocument.mozRequestFullscreen();
        }
        else if(myDocument.webkitRequestFullscreen){
           
            myDocument.webkitEnterFullscreen();
        }
         btn.textContent = "Exit Fullscreen";
         landscapenav.style.display="block";
         landscapebrochure.style.display = 'block';
        
            }
    else{
        if(document.exitFullscreen){
            document.exitFullscreen();
        }
        else if(document.msexitFullscreen){
            document.msexitFullscreen();
        }
        else if(document.mozexitFullscreen){
            document.mozexitFullscreen();
        }
        else if(document.webkitexitFullscreen){
            document.webkitexitFullscreen();
        }
        btnfullscreen.textContent = "Fullscreen";
    }
});

let portrait = window.matchMedia("(orientation: portrait)");
// let portraitimg = document.getElementById("portrait");
portrait.addEventListener("change", function(e) {
    if(e.matches) {
        //Portrait mode
        // normalscreen.style.display="block";
        // btnfullscreen.style.display="block";
        landscapebrochure.style.display = 'none';
        landscapenav.style.display="none";
        // portraitimg.style.display="block";

    } 
    });
     let landscape = window.matchMedia("(orientation: landscape)");

    landscape.addEventListener("change", function(e){
     if(e.matches){
           //Landscape
           
     }
    });

// let btn = document.getElementById("btn");
// let  landscapebrochure = document.getElementById("landscape-brochure");
// let landscapenav = document.getElementById("landscape-nav");
// let normalscreen = document.getElementById("btn-normalscreen");
// let btnfullscreen = document.getElementById("btn-fullscreen");
// let portraitimg = document.getElementById("portrait");
// 
// let landscape = window.matchMedia("(orientation: landscape)");

// 
// landscape.addEventListener("change", function(e){
    // if(e.matches){
           //Landscape
        // portraitimg.style.display="none";
        //  normalscreen.addEventListener("click",()=>{
        //  landscapebrochure.style.display = 'block';
        //  landscapenav.style.display="block";
        //  });
    // }
// });








