import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
const [click,setClick] = useState(false);

const handleClick = ()=>{

  setClick(!click)

}

const[color, setColor] = useState(false);

const handleColor =()=>{
  if(window.scrollY>=200){
setColor(true)
  }else{
    setColor(false)
  }
}


window.addEventListener("scroll",handleColor)

  return (
    <nav className={color? 'color':''}>
      <div className="logo">
        <h1>AniBuzz</h1>
      </div>
      <div className={click?'menu active':'menu'}>
        <Link to="/">Home</Link>
        <Link to='/upcoming'>Upcoming</Link>
        <Link to='/trending'>Trending</Link>
        <Link to='/register'>Register</Link>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {
          click?(<FaTimes  style={{color : 'white'}} size={25}/>)
          :(<FaBars  style={{color : 'white'}} size={25}/>)
        }
      </div>
    </nav>
  )
}

export default Navbar