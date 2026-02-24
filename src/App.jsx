import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Gsapto from './Pages/gsapto'
import About from './components/About.jsx'
import Gsapfrom from './Pages/Gsapfrom'
import GsapFromto from './Pages/GsapFromto'
import gsap from 'gsap'
import Contact from './components/Contact.jsx'
import Cocktails from "./components/Cocktails.jsx"
import Gsaptimeline from './Pages/Gsaptimeline'
import {ScrollTrigger,SplitText} from 'gsap/all'
import Menu from './components/Menu.jsx'
gsap.registerPlugin(ScrollTrigger,SplitText)
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Art from './components/Art.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <main>
    <Navbar/>
    <Hero/>
   <Cocktails/>
   <About/>
   <Art/>
   <Menu/>
   <Contact/>
   </main>
    </>
  )
}

export default App
