import React from 'react'
import { navLinks } from '../constants/index.js'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"

const Navbar = () => {
    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger:"nav",
                start:'bottom top'

            }
        })
        navTween.fromTo('nav',{backgroundColor:'transparent'},{
        backgroundColor:'#00000070',
         backdropFilter: 'blur(8px)',
        duration:1,
        ease:'power1.inOut'
        })
    })
  return (
   <nav >
    <div className='flex px-5'>
        <a href="#home" className='flex items-center  '>
            <img src="/public/logo.png" alt="" />
           <p className='font-serif'>
            Velvet Pour
           </p>
        </a>
        <ul>
            {navLinks.map((item)=>{
             return  ( <li key={item.id}>
               <a href={`#${item.id}`}>{item.title}</a>
             </li>
             )
            })}
        </ul>
    </div>
   </nav>
  )
}

export default Navbar
