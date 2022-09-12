import React, { useState } from 'react'

import logo from "./assets/images/logo.svg"
import cart from "./assets/images/icon-cart.svg"
import avatar from "./assets/images/image-avatar.png"
import menu from "./assets/images/icon-menu.svg"
import close from "./assets/images/icon-close.svg"

function Nav() {
  const [showNav, setShowNav] = useState(false)

  console.log(showNav);
    return (
        <nav className='flex basis-full pt-8 pb-6 items-center px-2'>
        {/* Menu Open*/}
        <div className={`cursor-pointer pt-1 pr-4 ${showNav ? 'hidden' : 'block'}`}>
          <img src={menu} alt="" onClick={()=> setShowNav(!showNav)}/>
        </div>
        {/* logo */}
        <div className={`${showNav ? 'hidden' : 'block'}`}>
          <img src={logo} alt="" />
        </div>
        {/* nav items */}
        <div className={`${showNav ? 'flex' : 'hidden'} absolute bg-white justify-between w-[250px] left-0 top-1 -mt-1 h-full z-10 drop-shadow-[150px_0px_0px_rgb(0,0,0,.8)]`}>
          <ul className='gap-2 mt-10 capitalize text-Verydarkblue font-semibold pl-6'>
          <li className='py-3'>collections</li>
          <li className='py-3'>men</li>
          <li className='py-3'>women</li>
          <li className='py-3'>about</li>
          <li className='py-3'>contact</li>
        </ul>
        {/* Menu Close*/}
        <div className={`cursor-pointer pt-1 pr-4 mt-10 ${showNav ? 'block' : 'hidden'}`}>
          <img src={close} alt="" onClick={()=> setShowNav(!showNav)}/>
        </div>
        </div>
        
        
        {/* cart & avatar */}
        <div className='ml-auto flex h-8 items-center gap-3'>
          <img src={cart} alt="" className='h-4 cursor-pointer'/>
          <img src={avatar} alt="" className='h-8 cursor-pointer'/>
        </div>
      </nav>
    )
}

export default Nav