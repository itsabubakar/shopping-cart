import { useState } from 'react'
import { EContext } from './EContext'

import Nav from "./Nav"
import Slide from "./ProductSlide"
import Quantity from './Quantity'
import Cart from './Cart'

import './App.css'

function App() {
  const [index, setIndex] = useState(0);

  return (
    <div className='flex justify-center sm:mx-4'>
      <div className='max-w-[370px] item-conc mb-2 pb-2'>
        <Nav/>
        <EContext.Provider value={{
          index,
          setIndex
        }}>
        <Slide/>
        </EContext.Provider>
        <Quantity/>
        <Cart />
      </div>
    </div>
  )
}

export default App
