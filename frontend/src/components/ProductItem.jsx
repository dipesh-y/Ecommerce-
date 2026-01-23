import React from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import {Link} from 'react-router-dom';

const ProductItem = ({id, image, name, price}) => {
    const {currency} = React.useContext(ShopContext);

  return (
    <div>
   <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`} >
   <div className='overflow-hidden'>
    <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt=" "/>
   </div>
   </Link>

    </div>
  )
}

export default ProductItem