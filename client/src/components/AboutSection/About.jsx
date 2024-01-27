import React, { Component } from 'react'
import './About.scss'

import Container from '../Container/Container'
import AboutContent from './AboutContent/AboutContent'
import { BorderImage } from './../BorderImage/BorderImage';

export class About extends Component {
    render() {
        return (
            <section className='about'>
                <Container>
                    <BorderImage />
                    <AboutContent />
                </Container>
            </section>
        )
    }
}

export default About