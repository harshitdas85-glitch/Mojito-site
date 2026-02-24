import React from 'react'
import { cocktailLists, mockTailLists } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Cocktails = () => {
    useGSAP(()=>{
const parallaxtime = gsap.timeline({
    scrollTrigger:{
    trigger:'#cocktails',
    start: 'top 40%',
    end: 'bottom 80%',
    scrub:3
    }
})
 parallaxtime
.from('#c-left-leaf',{
    x:-100,y:100
})
.from('#c-right-leaf',{
x:100,y:100
})
},[])
  return (
    <section id="cocktails" className=''>
<img src="/public/cocktail-left-leaf.png" alt="" id="c-left-leaf"/>
<img src="/public/cocktail-right-leaf.png" alt="" id="c-right-leaf"/>

<div className='list'>
    <div className='popular'>
        <h2>Most Popular Cocktails:</h2>
        <ul>
            {
                cocktailLists.map((drink)=> (
                    <li className='playfair-display-hero' key={drink.name}>
                        <div className='md:me-28  font-serif'>
                            <h3 className='playfair-display-hero'>{drink.name}</h3>
                            <p>{drink.country} | {drink.detail}</p>

                        </div>
                        <span>{drink.price}</span>
                    </li>
                ))
            }
        </ul>

    </div>
    <div className='loved'>
        <h2>Most Loved Mocktails:</h2>
        <ul>
            {
                mockTailLists.map((drink)=> (
                    <li key={drink.name}>
                        <div className='me-28  playfair-display-hero '>
                            <h3 className='playfair-display-hero'>{drink.name}</h3>
                            <p>{drink.country} | {drink.detail}</p>

                        </div>
                        <span className='playfair-display-hero'>{drink.price}</span>
                    </li>
                ))
            }
        </ul>

    </div>
</div>
    </section>
  )
}

export default Cocktails
