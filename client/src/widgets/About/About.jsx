import React, { Component } from 'react'
import './About.scss'
import Container from './../../shared/Container/Container';
import { BorderImage } from './../../features/BorderImage/BorderImage';
import { AboutContent } from './../../features/AboutContent/AboutContent';

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