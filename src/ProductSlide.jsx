import React, { useState } from 'react'
import { useContext } from 'react'
import { EContext } from './EContext'

import imageProductOne from "./assets/images/image-product-1.jpg"
import imageProductTwo from "./assets/images/image-product-2.jpg"
import imageProductThree from "./assets/images/image-product-3.jpg"
import imageProductFour from "./assets/images/image-product-4.jpg"
import next from "./assets/images/icon-next.svg"



function Slide(){
  const imgArr = [imageProductOne, imageProductTwo, imageProductThree, imageProductFour];
  const {index, setIndex} = useContext(EContext)

  const checkNumber = (number) => {
    if (number > imgArr.length - 1) {
      return 0;
    }
    if (number < 0) {
      return imgArr.length - 1;
    }
    return number;
  }

  const nextFunction = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevFunction = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };


    return (
        <div className='z-0 relative'>
          <img src={imgArr[index]} alt="" className='w-full h-80'/>
          <div className='flex justify-between '>
          <img src={next} alt="" className='cursor-pointer -mt-[50%] w-10 h-10 bg-white p-3 rounded-full rotate-180 ml-4' onClick={prevFunction}/>
          <img src={next} alt="" className='cursor-pointer -mt-[50%] w-10 h-10 bg-white p-3 rounded-full mr-4' onClick={nextFunction}/>
          </div>
        </div>
    )
}

export default Slide