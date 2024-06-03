import './App.css';
import HamburgerMenu from './components/HamburgerMenu';
import { HeaderIcons } from './components/HeaderIcons';

import { LogoIntro } from './components/LogoIntro';

import bg from './assets/images/homepage-bg.jpg'; 

function App() {
  const bgstyle = {
    backgroundImage: `url(${bg})`, 
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  
  return (
    <>
    <div className="h-screen w-screen" style={bgstyle}>

    <LogoIntro/>
    {/* <HamburgerMenu/> */}
    {/* <HeaderIcons /> */}

    </div>
    </>
  );
}

export default App;
