import React from 'react'
import './Header.css'
import headerimg from '../../Assets/headerimg.jpg'
const Header = ({heading}) => {
  return (
    <section className='header' style={{backgroundImage :`url(${headerimg})`, backgroundSize:'cover',backgroundPosition:'fixed'}}>
        <h1>{heading}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, corporis!</p>
    </section>
  )
}

export default Header