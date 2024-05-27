import React from 'react'
import style from './style.module.scss'

import { SectionTitle } from '@shared/SectionTitle';
import { Paragraph } from '@shared/Paragraph';
import { MySpecs } from '@features/MySpecs';
import { Title } from '@shared/Title';
import { Button } from '@shared/Button';

export const AboutContent = (props) => {
  return (
    <div className={style['about-content']}>
      <SectionTitle>Обо мне</SectionTitle>
      <Title>{props.data?.title}</Title>
      <Paragraph>{props.data?.paragraph}</Paragraph>
      {/* <MySpecs /> */}
      <a href={props.data?.btn.btnHref}>
        <Button variable={'primary'}>
          {props.data?.btn.btnText}
        </Button>
      </a>
    </div>
  )
}
