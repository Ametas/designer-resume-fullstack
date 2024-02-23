import React from 'react'
import './style.scss'

import Container from '@shared/Container/Container';
import { SectionTitle } from '@shared/SectionTitle'
import { Title } from '@shared/Title';
import { List } from '@features/List';
import { PortfolioPreview } from '@features/PortfolioPreview';

const navData = [
    {
        text: 'All',
        href: '#portfolio-all'
    },
    {
        text: 'Mobile',
        href: '#portfolio-all'
    },
    {
        text: 'Website',
        href: '#portfolio-all'
    },
    {
        text: 'Animation',
        href: '#portfolio-all'
    },
    {
        text: 'Exclusive',
        href: '#portfolio-all'
    },
]

export const Portfolio = () => {
  return (
    <section className='portfolio'>
        <Container>
          <SectionTitle>Portfolio</SectionTitle>
          <Title>Some Of My Creative Work</Title>
          <List data={navData} />
          <PortfolioPreview />
        </Container>
    </section>
    )
}
