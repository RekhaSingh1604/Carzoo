import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import PopularCars from './components/PopularCars/PopularCars'
import PlatformStats from './components/PlatformStats/PlatformStats'
// import Cities from './components/Cities/Cities'
import Services from './components/Services/Services'
import HowItWorks from './components/HowItWorks/HowItWorks'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'

export const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <PopularCars/>
    <PlatformStats/>
    {/* <Cities/> */}
    <Services/>
    <HowItWorks/>
    <FAQ/>
    <Footer/>
    </>
  )
}
