import React, { useState } from 'react'

import minus from "./assets/images/icon-minus.svg"
import plus from "./assets/images/icon-plus.svg"

function Quantity() {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(125);

  const priceInc = () => {
    setPrice((index) => {
      let newIndex = index + 125;
      return newIndex;
    });
  };

  const priceDec = () => {
    setPrice((index) => {
      let newIndex = index - 125;
      return newIndex;
    });
  };

  const sub = () => {
    setQuantity((quantity) => {
      let newIndex = quantity - 1;
      console.log(newIndex);
      return newIndex;
    })
    priceDec(quantity)
  };

  const add = () => {
    setQuantity(quantity + 1)
    priceInc(quantity)
  }

  console.log(quantity);

    return <>
        {/* Product Info */}
        <div className='px-2'>
          <h2 className='uppercase tracking-wide text-sm py-4 text-Orange font-semibold'>Sneaker company</h2>
          <h1 className='font-bold text-3xl pb-4'>Fall Limited Edition Sneakers</h1>
          <p className='text-Grayishblue pb-10'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        </div>

        {/* Product Price */}
        <div className='flex items-center font-semibold pb-8 px-2'>
          <p className='text-3xl'>${price}</p>
          <p className='ml-6 bg-Paleorange text-Orange px-1 rounded pb-[2px]'>50%</p>
          <p className='ml-auto text-Grayishblue line-through'>$250.00</p>
        </div>

        {/* Quantity */}
        <div className='mx-2 flex justify-between items-center pb-4 bg-Lightgrayishblue px-4 pt-4 rounded mb-4'>
          <img src={minus} alt="" className='cursor-pointer w-4 h-1' onClick={sub}/>
          <p className='font-semibold'>{quantity}</p>
          <img src={plus} alt="" className='cursor-pointer w-4 h-4' onClick={add}/>
        </div>
    </>
}

export default Quantity