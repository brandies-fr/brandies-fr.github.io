import React from 'react'
// import { Navbar } from '../components/Navbar'
// import product from "../assets/video/products.mp4"
export const Contact = () => {
  return (
    <div>
    {/* <Navbar /> */}
        {/* Header Section */}
       <div className='bg-whoweare-bg  w-screen h-screen  bg-cover bg-center bg-no-repeat pt-20 ' >            
              <div className='container mx-auto p-10 text-center '>
                  <div className="grid grid-cols-1 gap-4   md:grid-cols-[60%_auto] ">
                  <article class="text-wrap ">
                                  <div className=' grid grid-cols-1 gap-4  place-items-center  pt-20'>                                                                           
                                        <p className=' font-Trojan  mb-3  text-2xl  font-medium  text-ambition-text-color   text-center'>
                               Societe Brandies<br></br>
                                78 Avenue des Champs Elysees <br></br>
                                Paris 75008 France.<br></br><br></br>

                                Email : info@brandies.fr<br></br>
                                Mob : +33 7 80 91 10 65.<br></br>
                                Fixe : +33 9 70 44 00 55.                                   
                                    </p>
                                    </div>
                                    
                                  </article>
                            <div className=' grid grid-cols-1 gap-4 place-items-center'>
                                   <img className='w-full h-auto'  src='../src/assets/images/contact-map.png' />
                              </div>                            
                    </div>
                </div>           
        </div>
</div>
  )
}
