import React from 'react'
import Hero from '../Styled/Hero'
import hero from '../assets/hero.svg'
import Footer from '../Styled/Footer'
import Services from './Services'
import Contact from './Contact'
import Min from './Min'

const Home = () => {
  const data = {
    name : "TECHI-VITE",
    image : hero
  }
  return (<>
    <Hero {...data}/>
    <Min/>
   

    <Contact/>
    </>
  )
}

export default Home
