import React from 'react'
import './style.scss'

import Container from '@shared/Container/Container';
import { SectionTitle } from '@shared/SectionTitle'
import { Title } from '@shared/Title';
import { PortfolioPreview } from '@features/PortfolioPreview';

export const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <Container>
        <SectionTitle>Portfolio</SectionTitle>
        <Title>Some Of My Creative Work</Title>
        <PortfolioPreview />
      </Container>
    </section>
  ) 
}
