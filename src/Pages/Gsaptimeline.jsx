import React from 'react'

const Gsaptimeline = () => {
  return (
    <div>
      
    </div>
  )
}

export default Gsaptimeline













// import React from 'react'
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react';
// function Gsaptimeline() {
//     const timeline = gsap.timeline({
//         repeat:-1,repeatDelay:1,yoyo:true
//     });
//     useGSAP(()=>{
//         timeline.to('#red',{
//             x:250,
//             rotation:360,
//             borderRadius:'100%',
//             duration:2,
//             ease:'back.inOut'
//         })
//         timeline.to('#red',{
//             y:250,
//             scale:2,
//             rotation:360,
//             borderRadius:'100%',
//             duration:2,
//             ease:'back.inOut'
//         })
//         timeline.to('#red',{
//             x:500,
//             scale:1,
//             rotation:360,borderRadius:'8px',
//             duration:2,
//             ease:'back.inOut'
//         })
//     },[])
//   return (
//     <>
//     <button onClick={()=>{
//         if(timeline.paused()){
//             timeline.play()
//         } else{
//             timeline.pause()
//         }
//     }}>switch</button>
//        <div id='red' className='w-20 h-20 bg-red-500 rounded-lg'>
      
//     </div>
   
// </>
//   )
// }

// export default Gsaptimeline
