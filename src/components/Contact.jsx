import React from 'react'
import { openingHours, socials } from '../constants'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'

const Contact = () => {
    useGSAP(()=>{
        const titlesplit = SplitText.create('#contact h2',{
type:"word"
        });
        const timeline = gsap.timeline({
            scrollTrigger:{
                trigger: '#contact',
                start:'top 80%',
            },
            ease:'power1.inOut'
        })
        timeline
        .from(titlesplit.words,{ 
            opacity:0,yPercent:100,stagger:0.02
        })
          .from('.tin p',{ 
            opacity:0,yPercent:100,stagger:0.02
        })
          .from('.content h2',{ 
            opacity:0,yPercent:100,stagger:0.02
        })
        .from('#contact h3',{
            opacity:0,yPercent:100,stagger:0.02
        } )
        .to('#f-right-leaf',{
            y:'-50',duration:1 ,ease:'power1.inOut'
        })
        .to('#f-left-leaf',{
            y:'-50',duration:1 ,ease:'power1.inOut'
        },'<')
    },[])
  return (
    <footer id="contact" className=''>
        <img src="/public/footer-right-leaf.png" alt="leaf-right" id='f-right-leaf' />
        <img src="/public/footer-left-leaf.png" alt="leaf-left" id='f-left-leaf ' />
        <div className='content font-serif'>
       <h2 className='font-serif'>
        Where to Find Us
       </h2>
        <div className='tin font-serif'>
        <p>

            Visit Our Bar
        </p>
    
        <p >
    27 Neon Sparrow Street, Moonlight District, Avalon City, 90210        </p>
</div>


<div className='flex flex-col gap-2'>
<p >
        Contact Us

</p>

<p >+91 0345335323</p>
<p>harshitdas85@gmail.com</p>
</div>
</div>
<div className='font-serif '>
    <h3 className='mb-2'>Open Every Day</h3>
    {
        openingHours.map((item,index)=>{
            return (
                <p className='mb-2'>
                    {item.day} : {item.time}
                </p>
            )
        })
    }
</div>
<div>
    <h3 className='font-serif mb-5'>
        Socials
    </h3>
    <div className='flex-center gap-5'>
{socials.map((social)=>{
    return (
        <a key={social.name} href={social.url} target='_blank' aria-label={social.name}>
            <img src={social.icon} alt="" />
        </a>
    )
})}
    </div>
</div>
    </footer>
  )
}

export default Contact
