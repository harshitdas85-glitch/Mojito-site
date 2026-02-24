import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function Gsapto() {
    useGSAP(()=>{
    gsap.to('#green-box',{
        x:250,
        repeat:-1,
        yoyo:true,
        rotation:360,
        duration:3,
        ease:'bounce.in'
        
    })
    },[])
  return (
    <div id='green-box' className='w-20 mt-20 h-20 bg-blue-500 rounded-lg'>
      
    </div>
  )
}

export default Gsapto
