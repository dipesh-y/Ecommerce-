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
      
      {/*Rendering Products*/}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

        {latestProducts.map((item,index)=>(
            <ProductItem />
            
        ))
    } 
      </div>

    </div>
  )
}

export default LatestCollection