import React, { Component } from 'react'
import './Hero.scss'
import HeroText from '../../features/HeroText/HeroText'
import HeroImage from '../../features/HeroImage/HeroImage'

export function Hero() {
    return (
        <div className='hero'>
            <HeroText />
            <HeroImage />
        </div>
    )
}

export default Hero