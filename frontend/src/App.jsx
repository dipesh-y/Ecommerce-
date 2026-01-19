import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Collection from './pages/Collection.jsx'
import About from './pages/About.jsx'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/collection' element={<Collection/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/contact' element={<Contact/>} />
       <Route path='/product/: productId' element={<Product/>} />
       <Route path='/cart' element={<Cart/>} />
       <Route path='login' element={<Login/>} />
       <Route path='/placeorder' element={<PlaceOrder/>} />
       <Route path='/order' element={<Orders/>} />
      </Routes>
    </div>
  )
}

export default App