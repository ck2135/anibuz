import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import List from './list/List'
const Upcoming = () => {
  return (
    <div> 
      <Navbar />
      <Header heading='Upcoming Anime Updates'/>
      <List />
      <Footer />
    </div>
  )
}

export default Upcoming