import React, { useContext } from 'react'

const Collection = () => {
const { products } = useContext(ShopContext);
const [showFilters, setShowFilters] = React.useState(false);

  return (
    <div classname="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
     
   { /* Filter options */}
    <div className="min-w-60">
    <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>
      FILTERS
    </p>
     {/* Category Filter*/}
      <div className= {` border border-gray-300 pl-5 py-3 mt-6`}>

      </div>
    </div>

    </div>
  )
}

export default Collection