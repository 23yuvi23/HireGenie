import React from 'react'
import Banner from '../components/Home/Banner'
import Hero from '../components/Home/Hero'
import Feature from '../components/Home/Feature'

const Home = () => {
  return (
    <div>
        <h1>
          <Banner/>
          <Hero/>
          <Feature/>
        </h1>
    </div>
  )
}

export default Home