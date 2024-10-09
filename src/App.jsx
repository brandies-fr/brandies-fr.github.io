import React,{Suspense, useState} from 'react';
import './App.css';
import HamburgerMenu from './components/HamburgerMenu';
import BrochureIcon from "./components/BrochureIcon";
// import { HeaderIcons } from './components/HeaderIcons';
import { LogoIntro } from './components/LogoIntro';
// const LogoIntro = React.lazy(() => import ("./components/LogoIntro"));
// import LazzyLoading from './components/LazzyLoading';

function App() {
//  Page loading
  // const [loading, setloading] = useState(true);
  // const pageLoading = document.getElementById('pageLoading');
  // if(pageLoading){
  //   setTimeout(() =>{
  //     pageLoading.style.display = "none";
  //     setloading(false);
  //   }, 2000);
  // }
  return (
    <>
    {/* <Suspense fallback={<div class="loading-text">Loading..</div>}> */}
    <BrochureIcon/>
      <LogoIntro />      
      <HamburgerMenu />

     
    {/* </Suspense> */}
   
    {/* <LazzyLoading/> */}

    {/* <HeaderIcons /> */}
  </>
    // !loading && (
    //   <>
    //   <LogoIntro />
    //   <HamburgerMenu />
    //   {/* <HeaderIcons /> */}
    // </>
    // )
   
  );
}

export default App;







