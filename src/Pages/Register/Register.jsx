import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Form from './component/Form'
import './Register.css'
const Register = () => {
  return (
    <div>
       <Navbar />
       <Header heading='Hurry Up! Register'/>
       <Form />
       <Footer />
    </div>
  )
}

export default Register