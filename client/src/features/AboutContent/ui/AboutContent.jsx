import React, { useEffect, useState } from 'react'
import style from './style.module.scss'

import { SectionTitle } from '@shared/SectionTitle';
import { Paragraph } from '@shared/Paragraph';
import { MySpecs } from '@features/MySpecs';
import { Title } from '@shared/Title';
import { Button } from '@shared/Button';

export const AboutContent = (props) => {
  // const [aboutData, setAboutData] = useState(null)

  // useEffect(() => {
  //   fetch('api/about')
  //     .then(response => response.json())
  //     .then(response => setAboutData(response))
  //     .catch(error => console.log(error))
  // }, [])

  return (
    <div className={style['about-content']}>
      <SectionTitle>About Me</SectionTitle>
      <Title>{props.data?.title}</Title>
      <Paragraph>{props.data?.paragraph}</Paragraph>
      <MySpecs />
      <Button 
        href={props.data?.btn.btnHref} 
        variable={'primary'}
      >
        {props.data?.btn.btnText}
      </Button>
    </div>
  )
}
