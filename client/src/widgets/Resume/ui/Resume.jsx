import React, { useState } from 'react'
import './style.scss'

import Container from '@shared/Container/Container';
import { SectionTitle } from '@shared/SectionTitle';
import { Title } from '@shared/Title';
import { Tab } from '@shared/Tab';
import { BorderImage } from '@features/BorderImage';
import { SkillBox } from '@features/SkillBox';

const skillData = {
  design: [
    {
      id: 1,
      title: 'Adobe Photoshop',
      percent: 90
    },
    {
      id: 2,
      title: 'Adobe Illustrator',
      percent: 80
    },
    {
      id: 3,
      title: 'Adobe XD',
      percent: 70
    },
    {
      id: 4,
      title: 'Figma',
      percent: 60
    }
  ],
  experience: [
    {
      id: 1,
      title: 'Freelance Design',
      percent: 90
    },
    {
      id: 2,
      title: 'Frontend Developer',
      percent: 80
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      percent: 70
    },
    {
      id: 4,
      title: 'Photographer',
      percent: 60
    }
  ],
  education: [
    {
      id: 1,
      title: 'Последние тренды в дизайне интерьеров',
      percent: 90
    },
    {
      id: 2,
      title: 'Изучение новых материалов тенденций в декоре',
      percent: 50
    },
    {
      id: 3,
      title: 'Развитие навыков в области дизайна интерьеров',
      percent: 30
    },
    {
      id: 4,
      title: 'Участие в семинарах по инновационным технологиям',
      percent: 65
    }
  ]
}


export const Resume = (props) => {
  const [activeTab, setActiveTab] = useState('design')

  return (
    <section className='resume'>
      <Container>
        <div className="resume-content">
          <SectionTitle>Resume</SectionTitle>
          <Title>Skill & Experience</Title>
          <div className="tabs">
            <Tab 
              onClick={() => {setActiveTab('design')}} 
              isActive={activeTab === 'design'}
            >
              Design
            </Tab>
            <Tab 
              onClick={() => {setActiveTab('experience')}} 
              isActive={activeTab === 'experience'}
            >
              Experience
            </Tab>
            <Tab 
              onClick={() => {setActiveTab('education')}} 
              isActive={activeTab === 'education'}
            >
              Education
            </Tab>
          </div>
          <SkillBox data={skillData[activeTab]} />
        </div>
        <div className="resume-image">
          <BorderImage />
        </div>
      </Container>
    </section>
  )
}
