import React, { useEffect, useState } from 'react'
import style from './style.module.scss'

import { SectionTitle } from '@shared/SectionTitle';
import { Paragraph } from '@shared/Paragraph';
import { MySpecs } from '@features/MySpecs';
import { Title } from '@shared/Title';
import { Button } from '@shared/Button';

export const AboutContent = () => {
  const [aboutData, setAboutData] = useState(null)

  useEffect(() => {
    fetch('api/about')
      .then(response => response.json())
      .then(response => setAboutData(response))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className={style['about-content']}>
      <SectionTitle>About Me</SectionTitle>
      <Title>{aboutData?.title}</Title>
      <Paragraph>{aboutData?.paragraph}</Paragraph>
      <MySpecs />
      <Button 
        href={aboutData?.btn.btnHref} 
        variable={'primary'}
      >
        {aboutData?.btn.btnText}
      </Button>
    </div>
  )
}
