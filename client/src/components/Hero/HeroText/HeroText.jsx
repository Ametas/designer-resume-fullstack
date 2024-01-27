import React, { Component } from 'react'
import './HeroText.scss'
import Button from '../../Button/Button'
import Paragraph from '../../Paragraph/Paragraph'
import SupTitle from '../../SupTitle/SupTitle'
import Title from '../../Title/Title'

export class HeroText extends Component {
  render() {
    return (
        <div className="hero-text">
            <i className="round"></i>
            <SupTitle text='Welcome To My Portfolio' />
            <Title text='Hello, I‘m Johan Deo Professional Designer.' />
            <Paragraph text='Conveniently customize proactive web services for leveraged without continualliery aggregate fricctionle ou wellies richard.' />
            <div className='btns'>
                <Button text='Hire me' />
                <Button text='Download CV' variable="secondary" />
            </div>
        </div>
    )
  }
}

export default HeroText