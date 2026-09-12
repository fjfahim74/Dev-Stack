
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import TechnologySection from './components/TechnologySection/TechnologySection'
import { ToastContainer } from 'react-toastify'


function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <TechnologySection />
      <ToastContainer />
      <Footer />

    </div>
  )
}

export default App
