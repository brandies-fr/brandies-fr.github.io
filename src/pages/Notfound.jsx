import React from 'react'
import HamburgerMenu from '../components/HamburgerMenu';
import { HeaderIcons } from '../components/HeaderIcons';


function Notfound() {
  return (
    <div>
        <HamburgerMenu/>
        <HeaderIcons/>
        <div className='bg-whoweare-bg bg-[#2b1809]  w-full h-screen sm:min-h-screen sm:h-screen xs:min-h-screen xs:h-auto  bg-cover bg-center bg-no-repeat pt-20' >            
              <div className=' flex items-center justify-center pt-20'>
              <div className=' grid grid-cols-1 gap-4  place-items-center  '>   
              <div className=' font-Trojan   text-[10rem]  font-medium  text-ambition-text-color  text-center'>
                              404   
                        </div>
                        <div className=' font-Trojan   text-5xl  font-medium  text-ambition-text-color text-center '>
                              Page Not found      
                        </div>
                      </div>   
                      </div>        
              </div>
          </div>
  )
}
export default Notfound