import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Qualification from './components/qualification/Qualification'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'
import Projects from './components/projects/Projects'

function App() {
  
  return (
    <>
    <Header />
    <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        {/* <Testimonials /> */}
        <Projects />
        <Contact />
    </main>
    <Footer />
    <ScrollUp />
    
    </>
  )
}

export default App
