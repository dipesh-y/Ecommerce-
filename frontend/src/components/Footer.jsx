import React from 'react'

const Footer = () => {
  return (
    <div>

        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
    <div>
        <img src={assets.logo} className='mb-5 w-32' alt=""/>
        <p className='w-full m:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, asperiores velit? Soluta voluptas sed debitis aperiam at distinctio, nam aut animi, dolor odio, aliquid accusantium omnis a facilis consequatur aliquam?
        </p>
    </div>
    <div>
        <p>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
         <li>Home</li>
         <li>About</li>
         <li>Delivery</li>
         <li>Privacy Policy</li>
        </ul>
    </div>
        </div>
    </div>
  )
}

export default Footer