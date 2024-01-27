import React, { Component } from 'react'
import './BorderImage.scss'
import bg from '../../assets/images/photo-bg.png'

export class BorderImage extends Component {
    render() {
        return (
            <div className='border-image'>
                <i className="background">
                    <img src={bg} alt="" />
                </i>
                <div className="image-border">
                    {/* Сюда изображение */}
                </div>
            </div>
        )
    }
}

export default BorderImage