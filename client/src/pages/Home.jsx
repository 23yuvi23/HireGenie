import React from 'react'
import Banner from '../components/Home/Banner'
import Hero from '../components/Home/Hero'
import Feature from '../components/Home/Feature'
import Testimonials from '../components/Home/Testimonials'
import CallToAction from '../components/Home/CallToAction'

const Home = () => {
  return (
    <div>
        <h1>
          <Banner/>
          <Hero/>
          <Feature/>
          <Testimonials/>
          <CallToAction/>
        </h1>
    </div>
  )
}

export default Home