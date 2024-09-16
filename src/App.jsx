import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkFlow from './components/WorkFlow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection></HeroSection>
        <FeatureSection></FeatureSection>
        <WorkFlow></WorkFlow>
        <Pricing></Pricing>
        <Testimonials></Testimonials>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App