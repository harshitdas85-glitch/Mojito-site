import React, { useState } from 'react'
import { sliderLists } from '../constants'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
const Menu = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    useGSAP(()=>{
gsap.fromTo('#title',{opacity:0},{opacity:1,duration:1})
gsap.fromTo('.cocktail img',{opacity:0,xPercent:-100},{
    xPercent:0,opacity:1,duration:1,ease:'power1.inOut'
})  
const words1 = SplitText.create('.details h2',{
    type:"words"
})
gsap.fromTo('.details h2',{yPercent:100,opacity:0},{
    yPercent:0,opacity:100,ease:'power1.inOut',duration:1,stagger:0.06
})
gsap.fromTo('.details p',{yPercent:100,opacity:0},{
    yPercent:0,opacity:100,ease:'power1.inOut',duration:1
})
    },[currentIndex])
    const contentRef = useRef()
    const totalcocktails = sliderLists.length
    const gotoSlide = (index) => {
        const newIndex = (index + totalcocktails) % totalcocktails;
        setCurrentIndex(newIndex)
    }
    const getcocktailat = (indexoffset) => {
        return sliderLists[(currentIndex + indexoffset + totalcocktails) % totalcocktails]
    }
    const currentCocktail = getcocktailat(0)
    const prevCocktail = getcocktailat(-1)
    const nextCocktail = getcocktailat(1)

    return (
        <section id='menu' aria-labelledby='menu-heading '>
            <img src="/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf' />
            <img src="/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf' />
            <h2 id='menu-heading' className='sr-only'>
                Cocktail Menu
            </h2>
            <nav className='cocktail-tabs ' aria-label="Cocktail Navigation">
                {sliderLists.map((item, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button className={` ${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'} kaushan-script-regular text-2xl `} key={item.id} onClick={() => gotoSlide(index)}>
                            {item.name}
                        </button>
                    )
                })}
            </nav>
            <div className='content'>
                <div className='arrows'>
                    <button className='text-left ' onClick={() => gotoSlide(currentIndex - 1)}>
                        <span className='dancing-script-hero text-4xl'>{prevCocktail.name}</span>
                        <img src="/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                    </button>
                    <button className='text-left' onClick={() => gotoSlide(currentIndex + 1)}>
                        <span className='dancing-script-hero text-4xl'>{nextCocktail.name}</span>
                        <img src="/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                    </button>
                </div>
                <div className='cocktail'>
                    <img src={currentCocktail.image} className='object-contain' alt="" />

                </div>
                <div className='recipe'>
                    <div className='info'>
                        <p className='font-serif'>Recipe for:</p>
                        <p id='title' className='kaushan-script-regular' >
                            {currentCocktail.name}

                        </p>
                    </div>
                    <div className='details'>
                        <h2 className='playfair-display-hero'>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu
