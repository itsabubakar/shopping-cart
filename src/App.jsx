import { useState } from 'react'

// Nav Images
import logo from "./assets/images/logo.svg"
import cart from "./assets/images/icon-cart.svg"
import avatar from "./assets/images/image-avatar.png"
import menu from "./assets/images/icon-menu.svg"

// Image slider assets 
import imageProductOne from "./assets/images/image-product-1-thumbnail.jpg"
import next from "./assets/images/icon-next.svg"
import minus from "./assets/images/icon-minus.svg"
import plus from "./assets/images/icon-plus.svg"

function App() {

  return (
    <div className='flex flex-col justify-center mx-4'>
      {/* Nav bar */}
      <nav className='flex basis-full max-w-[1000px] pt-8 pb-6 items-center sm:border-b-2'>
        {/* Menu */}
        <div className='pt-1 pr-4 sm:hidden'>
          <img src={menu} alt="" />
        </div>
        {/* logo */}
        <div>
          <img src={logo} alt="" />
        </div>
        {/* nav items */}
        <ul className='hidden gap-2 capitalize text-Darkgrayishblue pl-4 sm:flex items-center'>
          <li>collections</li>
          <li>men</li>
          <li>women</li>
          <li>about</li>
          <li>contact</li>
        </ul>
        {/* cart & avatar */}
        <div className='ml-auto flex h-8 items-center gap-3'>
          <img src={cart} alt="" className='h-4'/>
          <img src={avatar} alt="" className='h-8'/>
        </div>
      </nav>

      {/* Product Details */}
      <div>
        {/* Product Image */}
        <div>
          <img src={imageProductOne} alt="" className='w-full h-80'/>
          <div className='flex justify-between '>
          <img src={next} alt="" className='-mt-[55%] w-10 h-10 bg-white p-3 rounded-full rotate-180 ml-4'/>
          <img src={next} alt="" className='-mt-[55%] w-10 h-10 bg-white p-3 rounded-full mr-4'/>
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h2 className='uppercase tracking-wide text-sm py-4 text-Orange font-semibold'>Sneaker company</h2>
          <h1 className='font-bold text-3xl pb-4'>Fall Limited Edition Sneakers</h1>
          <p className='text-Grayishblue pb-10'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        </div>

        {/* Product Price */}
        <div className='flex items-center font-semibold'>
          <p className='text-3xl'>$125.00</p>
          <p className='ml-6 bg-Paleorange text-Orange px-1 rounded pb-[2px]'>50%</p>
          <p className='ml-auto text-Grayishblue line-through'>$250.00</p>
        </div>

        {/* Quantity */}
        <div>
          <img src="" alt="" />
          <p></p>
          <img src="" alt="" />
        </div>

      </div>

      

    </div>
  )
}

export default App
