import React, { useState, useEffect } from 'react'
import './style.scss'

import { SectionTitle } from '@shared/SectionTitle'
import Container from '@shared/Container/Container';
import { Title } from '@shared/Title';
import { Card } from '@shared/Card'

import ComputerGraphic from '@assets/images/pc-graphic.png'

export const Services = () => {
  const [cardData, setCardData] = useState(null)

  useEffect(() => {
    fetch('api/services')
      .then(response => response.json())
      .then(response => setCardData(response))
      .catch(error => console.log(error))
  }, [])

  return (
    <section className='services'>
      <Container>
        <SectionTitle>Why Choose Us</SectionTitle>
        <Title>Our Work Services</Title>
        <div className="cards">
          {cardData?.map((item, i) => (
            <Card key={i}
              img={ComputerGraphic}
              title={item.title}
              text={item.text}
              actionHref={item.actionHref}
              actionText={item.actionText}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
