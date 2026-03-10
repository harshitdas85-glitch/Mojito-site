import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { useEffect } from 'react';
import {SplitText} from 'gsap/all';
import gsap from "gsap"
import { useMediaQuery } from 'react-responsive';
const Hero = () => {
    const videoref = useRef()
    const isMobile = useMediaQuery({maxWidth:767})
        useGSAP(()=>{
const herosplit = new SplitText('.title',{type:'chars,words'})
const paragraphsplit = new SplitText('.subtitle',{type:'lines'})
herosplit.chars.forEach((element) =>  element.classList.add('text-gradient'));
gsap.from(herosplit.chars,{
    yPercent:100,
    duration:1.8,
    ease:"expo.out",
    stagger:0.06

})
gsap.from(paragraphsplit.lines,{
    opacity:0,
    duration:1,
    yPercent:100,
    ease:'expo.out',
    stagger:0.06,
    delay:1
})
gsap.timeline({
    scrollTrigger: { 
        trigger:'#hero',
        start: "top top",
        end:'bottom top',
        scrub:true
    }
})
.to('.right-leaf',{y:200},0)
.to('.left-leaf',{y:-200},0)

const startvalue = isMobile ?'center 50%' :  'center 60%';
const endvalue = isMobile ?  '120% top' : 'bottom  top';

  const tl = gsap.timeline({
    scrollTrigger:{
        trigger:'video',
    start:startvalue,
    end:endvalue,
    scrub:true,
    pin:true,
    }
})
  if (videoref.current) {
    videoref.current.onloadedmetadata = () => {
      tl.to(videoref.current, {
        currentTime: videoref.current.duration
      });
    };
  }


    },[]);

  return (
    <>
<section id='hero' className='  '>
<h1 className='title font-serif'>MOJITO</h1>
<img src="/hero-left-leaf.png" alt="" className='left-leaf' />
<img src="/hero-right-leaf.png" alt="" className='right-leaf' />

<div className='body'>
<div className='content'>
<div className='space-y-5 hidden md:block font-serif'>
<p>Cool. Crisp. Classic.</p>
<p className='subtitle font-serif'>
    Sip the Spirit
    <br /> of Summer
</p>
</div>
<div className='view-cocktails'>
    <p className='subtitle'>
Every cocktail, a crafted indulgence — luxury in every sip. <br />
Where mixology meets mastery, each glass a statement of taste.

    </p>
    <a href="#cocktails">View Cocktails</a>
</div>
</div>
</div>
</section>
 <div className='video absolute inset-0  '>
<video ref={videoref} src="/output.mp4" muted playsInline preload='auto'></video>
</div> 
</>
  )
}

export default Hero
