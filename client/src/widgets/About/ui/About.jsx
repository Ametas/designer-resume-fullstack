import React, { useEffect, useState } from 'react'
import './style.scss'

import Container from '@shared/Container/Container';
import { BorderImage } from '@features/BorderImage';
import { AboutContent } from '@features/AboutContent';

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
        <BorderImage />
        <AboutContent data={aboutProps} />
      </Container>
    </section>
  )
}
