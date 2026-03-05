import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
function GsapFromto() {

      useGSAP(()=>{
    gsap.fromTo('#yellow',{
        x:0,
        rotation:0,
        borderRadius:'0%'
    },{
        x:250,
        repeat:-1,
        yoyo:true,
        borderRadius:'60%',
        rotation:360,
        duration:3,
        ease:'bounce-in'
        
    })
    },[])
  return (

  <div id='yellow' className='w-20 mt-20 h-20 bg-blue-500 rounded-lg'>
      
    </div>
  )
}

export default GsapFromto
