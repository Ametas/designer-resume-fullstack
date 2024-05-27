import React from 'react'
import './style.scss'

import xdPng from '@assets/images/xd.png'
import photoshopPng from '@assets/images/photoshop.png'
import sketchPng from '@assets/images/sketch.png'
import figmaPng from '@assets/images/figma.png'

import img from '@assets/images/designer-photos/2.png'

export const HeroImage = () => {
  return (
    <div className='image-container'>
        <div className="designer-image">
            <img src={img} alt="" />
        </div>
        <div className="icon xd">
            <img src={xdPng} alt="XD" />
        </div>
        <div className="icon photoshop">
            <img src={photoshopPng} alt="Photoshop" />
        </div>
        <div className='icon sketch'>
            <img src={sketchPng} alt="Sketch" />
        </div>
        <div className="icon figma">
            <img src={figmaPng} alt="Figma" />
        </div>
    </div>
)
}
