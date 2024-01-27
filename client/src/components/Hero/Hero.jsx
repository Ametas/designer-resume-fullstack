import React, { Component } from 'react'
import './Hero.scss'
import HeroText from './HeroText/HeroText'
import HeroImage from './HeroImage/HeroImage'

export class Hero extends Component {
    render() {
        return (
            <div className='hero'>
                <HeroText />
                <HeroImage />
            </div>
        )
    }
}

export default Hero