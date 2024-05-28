import React, { useState, useEffect } from 'react'
import './style.scss'

import { SectionTitle } from '@shared/SectionTitle'
import Container from '@shared/Container/Container';
import { Title } from '@shared/Title';
import { Card } from '@shared/Card'

import ComputerGraphic from '@assets/images/pc-graphic.png'

import { TbCube3dSphere } from "react-icons/tb";
import { PiBlueprint } from "react-icons/pi";
import { AiOutlinePicture } from "react-icons/ai";
import { SiSketchup } from "react-icons/si";

const icons = [TbCube3dSphere, PiBlueprint, AiOutlinePicture, SiSketchup]

export const Services = () => {
  const [cardData, setCardData] = useState(null)

  useEffect(() => {
    fetch('api/services')
      .then(response => response.json())
      .then(data => {
        // Добавляем иконки к каждому объекту данных
        const updatedData = data.map((item, index) => ({
          ...item,
          icon: icons[index % icons.length], // Циклически назначаем иконки
        }));
        setCardData(updatedData);
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <section id='services' className='services'>
      <Container>
        <SectionTitle>Преимущества работы со мной</SectionTitle>
        <Title>Мои услуги</Title>
        <div className="cards">
          {cardData?.map((item, i) => (
            <Card key={i}
              title={item.title}
              text={item.text}
              actionHref={item.actionHref}
              actionText={item.actionText}
              icon={item.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
