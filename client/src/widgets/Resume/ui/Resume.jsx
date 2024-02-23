import React from 'react'
import './style.scss'

import Container from '@shared/Container/Container';
import { SectionTitle } from '@shared/SectionTitle';
import { Title } from '@shared/Title';
import { Tab } from '@shared/Tab';
import { SkillBar } from '@shared/SkillBar';
import { BorderImage } from '@features/BorderImage';

export const Resume = (props) => {
  return (
    <section className='resume'>
      <Container>
        <div className="resume-content">
          <SectionTitle>Resume</SectionTitle>
          <Title text='Skill & Experience'/>
          <div className="tabs">
            <Tab isActive={true}>Design</Tab>
            <Tab isActive={false}>Experience</Tab>
            <Tab isActive={false}>Education</Tab>
          </div>
          <SkillBar title='Adobe Illustrator' percent='90' />
          <SkillBar title='Adobe Photoshop' percent='80' />
          <SkillBar title='Adobe After Effect' percent='70' />
          <SkillBar title='Figma' percent='60' />
        </div>
        <div className="resume-image">
          <BorderImage />
        </div>
      </Container>
    </section>
  )
}
