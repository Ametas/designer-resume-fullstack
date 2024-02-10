import React, { Component } from 'react'
import './HeroImage.scss'

import xdPng from '../../assets/images/xd.png'
import photoshopPng from '../../assets/images/photoshop.png'
import sketchPng from '../../assets/images/sketch.png'
import figmaPng from '../../assets/images/figma.png'

export class HeroImage extends Component {
    render() {
        return (
            <div className='image-container'>
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
}

export default HeroImage