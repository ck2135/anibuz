
import Navbar from '../../Components/Navbar/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Features from './Components/Features'
import './HomeStyles.css'
import CallToAction from './Components/CallToAction'
import Frequentqa from './Components/Frequentqa'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <CallToAction />
      <Frequentqa />
      <Footer />
      </div>
  )
}

export default Home