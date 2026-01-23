import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext.jsx';
import Title from './Title.jsx';

const LatestCollection = () => {

const {products} = useContext(ShopContext);
const [latestProducts, setLatestProducts] = useState([]);

useEffect(() => {
   setLatestProducts(products.slice(0,10));
},[]);

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'} />
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quis alias nesciunt voluptatem ullam voluptatum natus, totam voluptate quibusdam aspernatur quidem beatae, incidunt quo nihil, ab ducimus debitis possimus ea.
            </p>
        </div>
    </div>
  )
}

export default LatestCollection