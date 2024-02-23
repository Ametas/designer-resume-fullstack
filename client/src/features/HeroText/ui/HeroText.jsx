import React, { useEffect, useState } from 'react'
import './style.scss'

import { Paragraph } from '@shared/Paragraph'
import { SupTitle } from '@shared/SupTitle';
import { Title } from '@shared/Title';
import { Button } from '@shared/Button';

export const HeroText = () => {
  const [heroData, setHeroData] = useState(null)

  useEffect(() => {
    fetch('/api/heroText')
      .then(response => response.json())
      .then(response => setHeroData(response))
      .catch(e => console.log(e))
  }, [])
  return (
    <div className="hero-text">
      <i className="round"></i>
      <SupTitle>{heroData?.supTitle}</SupTitle>
      <Title>{heroData?.title}</Title>
      <Paragraph>{heroData?.paragraph}</Paragraph>
      <div className='btns'>
        <Button 
          variable="primary">
          {heroData?.btns[0].btnText} 
        </Button>
        <Button 
          variable="secondary">
          {heroData?.btns[1].btnText} 
        </Button>
      </div>
    </div>
  )
}
