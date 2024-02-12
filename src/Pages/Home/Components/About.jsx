import React from 'react'
import AboutImg from '../../../Assets/AboutImg.jpg'
const About = () => {
  return (
    <>
    <h1 className='heading'>ABOUT US</h1>

    <section className="about">
        <img src={AboutImg} alt=''></img>
        <div className="text">
            <h2>lorem ipsum dior</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quae rem possimus aperiam est explicabo eius ratione vel magni minima dicta placeat quos nulla inventore nihil tempore similique illum perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quae rem possimus aperiam est explicabo eius ratione vel magni minima dicta placeat quos nulla inventore nihil tempore similique illum perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quae rem possimus aperiam est explicabo eius ratione vel magni minima dicta placeat quos nulla inventore nihil tempore similique illum perspiciatis?</p>
        </div>
    </section>
    
    </>
  )
}

export default About