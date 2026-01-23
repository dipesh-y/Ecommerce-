import React from 'react'
import LatestCollection from '../components/LatestCollection.jsx'
import Hero from '../components/Hero.jsx'
import BestSeller from '../components/BestSeller.jsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
    </div>
  )
}

export default Home