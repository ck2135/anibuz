import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Trends from './Trends'
import './Trending.css'

const Trending = () => {
  return (
    <div>
      <Navbar />
      <Header heading='Trending Anime List'/>
      <Trends />
      <Footer />
    </div>
  )
}

export default Trending