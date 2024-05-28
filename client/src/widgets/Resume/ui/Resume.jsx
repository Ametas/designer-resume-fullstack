import React, { useState } from 'react'
import './style.scss'

import Container from '@shared/Container/Container';
import { SectionTitle } from '@shared/SectionTitle';
import { Title } from '@shared/Title';
import { Tab } from '@shared/Tab';
import { BorderImage } from '@features/BorderImage';
import { SkillBox } from '@features/SkillBox';

import img from '@assets/images/designer-photos/7.png'

const skillData = {
  design: [
    {
      id: 1,
      title: 'Autodesk 3ds Max',
      percent: 90
    },
    {
      id: 2,
      title: 'AutoCAD',
      percent: 85
    },
    {
      id: 3,
      title: 'Adobe Photoshop',
      percent: 70
    },
    {
      id: 4,
      title: 'SketchUp',
      percent: 70
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
      percent: 70
    },
    {
      id: 3,
      title: 'Развитие навыков в области дизайна интерьеров',
      percent: 85
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
    <section id='resume' className='resume'>
      <Container>
        <div className="resume-content">
          <SectionTitle>Резюме</SectionTitle>
          <Title>Навыки & Опыт</Title>
          <div className="tabs">
            <Tab 
              onClick={() => {setActiveTab('design')}} 
              isActive={activeTab === 'design'}
            >
              Рабочие инструменты
            </Tab>
            <Tab 
              onClick={() => {setActiveTab('education')}} 
              isActive={activeTab === 'education'}
            >
              Образование
            </Tab>
          </div>
          <SkillBox data={skillData[activeTab]} />
        </div>
        <div className="resume-image">
          <BorderImage img={img} />
        </div>
      </Container>
    </section>
  )
}
