import React from 'react'
import { ShopContext } from '../context/ShopContext.jsx'

const BestSeller = () => {
const {products} = React.useContext(ShopContext);

  return (
    <div>BestSeller</div>
  )
}

export default BestSeller