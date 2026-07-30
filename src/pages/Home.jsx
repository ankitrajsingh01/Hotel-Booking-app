import React from 'react'
import Hero from '../components/Hero'
import HotelCard from '../components/HotelCard'
import { roomsDummyData } from '../assets/assets'
import Featured from '../components/Featured'
import Destination from '../components/Destination'
import Fotter from '../components/Fotter'

const Home = () => {
  return (
    <>
      <Hero />
      <Featured/>
      <Destination/>
      
    </>
  )
}

export default Home