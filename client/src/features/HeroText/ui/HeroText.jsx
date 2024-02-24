import React from 'react';
import './style.scss';

import { Paragraph } from '@shared/Paragraph';
import { SupTitle } from '@shared/SupTitle';
import { Title } from '@shared/Title';
import { Button } from '@shared/Button';

export const HeroText = (props) => {
  return (
    <div className="hero-text">
      <i className="round"></i>
      <SupTitle>{props.data?.supTitle}</SupTitle>
      <Title>{props.data?.title}</Title>
      <Paragraph>{props.data?.paragraph}</Paragraph>
      <div className='btns'>
        <Button variable="primary">
          {props.data?.btns[0]?.btnText} 
        </Button>
        <Button variable="secondary">
          {props.data?.btns[1]?.btnText} 
        </Button>
      </div>
    </div>
  );
};
