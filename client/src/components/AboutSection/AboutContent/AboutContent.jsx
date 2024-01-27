import React, { Component } from 'react'
import './AboutContent.scss'

import SectionTitle from '../../SectionTitle/SectionTitle'
import Title from '../../Title/Title'
import Paragraph from '../../Paragraph/Paragraph'
import MySpecs from '../MySpecs/MySpecs'
import Button from './../../Button/Button';

export class AboutContent extends Component {
    render() {
        return (
            <div className='about-content'>
                <SectionTitle data='About Me' />
                <Title text='Johan Deo' />
                <Paragraph text="I'm Graphic Designer, and I'm very passionate and dedicated to my work With 20 years experience as a professional Photography, I have lot of acquired the skills and knowledge necessary to make your project a success. I enjoy every step the Photography process, from discussion and collaboration." />
                <MySpecs />
                <Button text='Download CV' />
            </div>
        )
    }
}

export default AboutContent