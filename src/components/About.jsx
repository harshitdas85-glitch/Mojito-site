import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {SplitText} from 'gsap/all'
const About = () => {
useGSAP(()=>{
    const titleSplit = SplitText.create('#about p',{
        type:"words"
    })
    // const contentSplit = SplitText.create('.sub-content p',{
    //     type:"words"
    // })

    const scrollTimeline = gsap.timeline({
        scrollTrigger:{
            trigger:'#about',
            start:'top 80%',
        
            
        }
    })
    scrollTimeline
            .from(titleSplit.words,{
                opacity:0,
                duration:1,
                yPercent:100,
                ease:'expo.out',
                stagger:0.02
            })
            .from('.top-grid,.bottom-grid',{
                opacity:0,
                duration:1,
                ease:"power1.inOut",
                stagger:0.04 
            },'-=0.5')
})
  return (
    <div id='about'>
      <div className='mb-16 md:px-0 px-5'>
        <div className='content'>
            <div className='md:col-span-8'>
                <div className='badge'>Best Cocktails</div>
             <p className='text-6xl  text-balance  font-serif'>Where every detail matters<span className='text-white'>-</span>
                from muddle to garnish</p>
            </div>
            <div className='sub-content'>
            <p>
                Every cocktail we serve is a reflection of artistry and elegance — a harmony of flavor, craft, and sophistication. Each glass embodies our passion for perfection, inviting you to savor not just a drink, but an experience that mirrors the finest moments of indulgence.
            </p>
            <div>
                <p className='md:text-3xl text-xl font-bold'>
                    <span>4.5</span>/5
                </p>
                <p className='text-sm text-white-100'>
                    More Than +12000 customers
                </p>
            </div>
            </div>

        </div>

      
    </div>

      
      <div className='top-grid'>
<div className='sm:col-span-3'>
<img className='' src="/public/abt1.png" alt="grid-img-1" />
</div>
 <div className='sm:col-span-6 '>
<img  src="/public/abt2.png" alt="grid-img-2" />
</div> 
 <div className='md:col-span-3'>

<img className='' src="/public/abt5.png" alt="grid-img-5" />

</div> 
</div>


<div className='bottom-grid'>
<div className='md:col-span-8 h-4/5'>
<img src="/public/abt3.png" alt="grid-img-3" />
</div>
 <div className='md:col-span-4 h-4/5'>
<img src="/public/abt4.png" alt="grid-img-4" />
</div> 
      </div>
    </div>

    

  )
}

export default About
