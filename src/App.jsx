import { useState } from 'react'


import About from './components/About.jsx'

import gsap from 'gsap'
import Contact from './components/Contact.jsx'
import Cocktails from "./components/Cocktails.jsx"

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
