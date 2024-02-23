import React from 'react'
import './style.scss'
import { HeroText } from '@features/HeroText'
import { HeroImage } from '@features/HeroImage'

export const Hero = () => {
  return (
    <div className='hero'>
      <HeroText />
      <HeroImage />
    </div>
  )
}
