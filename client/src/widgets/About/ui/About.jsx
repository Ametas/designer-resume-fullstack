import React, { useEffect, useState } from 'react'
import './style.scss'

import Container from '@shared/Container/Container';
import { BorderImage } from '@features/BorderImage';
import { AboutContent } from '@features/AboutContent';

import img from '@assets/images/designer-photos/7.png'

export const About = () => {
  const [aboutProps, setAboutProps] = useState(null)

  useEffect(() => {
    fetch('api/about')
      .then(response => response.json())
      .then(response => setAboutProps(response))
      .catch(error => console.log(error))
  }, [])

  return (
    <section id='about' className='about'>
      <Container>
        <BorderImage img={img} />
        <AboutContent data={aboutProps} />
      </Container>
    </section>
  )
}
