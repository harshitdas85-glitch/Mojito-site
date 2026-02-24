import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
function Gsapfrom() {
      useGSAP(()=>{
    gsap.from('#blue-box',{
        x:250,
        repeat:-1,
        yoyo:true,
        rotation:360,
        duration:3,
        ease:'bounce.in'
        
    })
    },[])
  return (
      <div id='blue-box' className='w-20 h-20 bg-green-500 rounded-lg'>
      
    </div>
  )
}

export default Gsapfrom
