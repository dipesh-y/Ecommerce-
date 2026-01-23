import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from './Title.jsx'

const BestSeller = () => {
  const { products } = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    if (products && products.length > 0) {
      const bestProducts = products.filter(item => item.bestseller)
      setBestSeller(bestProducts.slice(0, 5))
    }
  }, [products])

  return (
    <div className='my-10'>
      <div className="text-center text-3xl py-8">
        <Title text1={'BEST'} text2={'SELLER'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure iusto excepturi doloribus inventore nisi autem, ad similique, est aut repellat placeat officiis enim dolore minima, aliquam nam fugiat dicta.
        </p>
      </div>
    </div>
  )
}

export default BestSeller
