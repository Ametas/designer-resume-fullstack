import React from 'react'
import './style.scss'
import Container from '@shared/Container/Container';
import { BorderImage } from '@features/BorderImage';
import { AboutContent } from '@features/AboutContent';

export const About = () => {
    return (
        <section className='about'>
            <Container>
                <BorderImage />
                <AboutContent />
            </Container>
        </section>
    )
}
