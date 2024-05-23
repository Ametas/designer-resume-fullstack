import React, { useState } from 'react'
import style from './style.module.scss'

import Container from '@shared/Container/Container'
import { ImageSlider } from '@shared/ImageSlider'
import { Navbar } from '@features/Navbar';

import img from '@assets/images/admin-image.jpg'

let portfolioData = [
  {
    id: 1,
    img: img,
    text: 'Однокомнатная квартира в центре Москвы',
    slides: [
      img,
      img,
      img,
      img,
      img,
      img,
      img,
      img,
    ],
    desc: {
      title: 'Дизайн-проект однокомнатной квартиры',
      square: 22,
      include: [
        'Обмерный план',
        'План монтажа',
        'План расстановки мебели',
        'План электрики',
        '3Д визуализация',
        'Смета на ремонт и материалы',
      ]
    }
  },
  {
    id: 2,
    img: img,
    text: '2',
    slides: [
      img,
      img,
      img,
      img,
      img,
      img,
      img,
      img,
    ],
    desc: {
      title: 'Дизайн-проект однокомнатной квартиры',
      square: 22,
      include: [
        'Обмерный план',
        'План монтажа',
        'План расстановки мебели',
        'План электрики',
        '3Д визуализация',
        'Смета на ремонт и материалы',
      ]
    }
  },
  {
    id: 3,
    img: img,
    text: '3',
    slides: [
      img,
      img,
      img,
      img,
      img,
      img,
      img,
      img,
    ],
    desc: {
      title: 'Дизайн-проект однокомнатной квартиры',
      square: 22,
      include: [
        'Обмерный план',
        'План монтажа',
        'План расстановки мебели',
        'План электрики',
        '3Д визуализация',
        'Смета на ремонт и материалы',
      ]
    }
  },
  {
    id: 4,
    img: img,
    text: '4',
    slides: [
      img,
      img,
      img,
      img,
      img,
      img,
      img,
      img,
    ],
    desc: {
      title: 'Дизайн-проект однокомнатной квартиры',
      square: 22,
      include: [
        'Обмерный план',
        'План монтажа',
        'План расстановки мебели',
        'План электрики',
        '3Д визуализация',
        'Смета на ремонт и материалы',
      ]
    }
  },
  {
    id: 5,
    img: img,
    text: '5',
    slides: [
      img,
      img,
      img,
      img,
      img,
      img,
      img,
      img,
    ],
    desc: {
      title: 'Дизайн-проект однокомнатной квартиры',
      square: 22,
      include: [
        'Обмерный план',
        'План монтажа',
        'План расстановки мебели',
        'План электрики',
        '3Д визуализация',
        'Смета на ремонт и материалы',
      ]
    }
  },
  {
    id: 6,
    img: img,
    text: '6',
    slides: [
      img,
      img,
      img,
      img,
      img,
      img,
      img,
      img,
    ],
    desc: {
      title: 'Дизайн-проект однокомнатной квартиры',
      square: 22,
      include: [
        'Обмерный план',
        'План монтажа',
        'План расстановки мебели',
        'План электрики',
        '3Д визуализация',
        'Смета на ремонт и материалы',
      ]
    }
  },
  {
    id: 7,
    img: img,
    text: '7',
    slides: [
      img,
      img,
      img,
      img,
      img,
      img,
      img,
      img,
    ],
    desc: {
      title: 'Дизайн-проект однокомнатной квартиры',
      square: 22,
      include: [
        'Обмерный план',
        'План монтажа',
        'План расстановки мебели',
        'План электрики',
        '3Д визуализация',
        'Смета на ремонт и материалы',
      ]
    }
  },
  {
    id: 8,
    img: img,
    text: '8',
    slides: [
      img,
      img,
      img,
      img,
      img,
      img,
      img,
      img,
    ],
    desc: {
      title: 'Дизайн-проект однокомнатной квартиры',
      square: 22,
      include: [
        'Обмерный план',
        'План монтажа',
        'План расстановки мебели',
        'План электрики',
        '3Д визуализация',
        'Смета на ремонт и материалы',
      ]
    }
  },
  {
    id: 9,
    img: img,
    text: '9',
    slides: [
      img,
      img,
      img,
      img,
      img,
      img,
      img,
      img,
    ],
    desc: {
      title: 'Дизайн-проект однокомнатной квартиры',
      square: 22,
      include: [
        'Обмерный план',
        'План монтажа',
        'План расстановки мебели',
        'План электрики',
        '3Д визуализация',
        'Смета на ремонт и материалы',
      ]
    }
  },
]

export const Portfolio = () => {
  const [showItem, setShowItem] = useState(null)

  const handleShowItem = (id) => {
    if(showItem === id) {
      return setShowItem(null)
    }
    return setShowItem(id)
  }

  return (
    <section className={style.portfolio}>
      <Container>
          <Navbar />
          <div className={style.cards}>
            {portfolioData.map((item) => (
              <div 
                className={`
                  ${style.card}
                  ${showItem != null ? style['is-inactive'] : ''}
                  ${showItem === item.id ? style['is-expanded'] : style['is-collapsed']}
                `}
              >
                <div 
                  className={`${style['card-inner']}`}
                  onClick={() => handleShowItem(item.id)}
                >
                  <div className={style['card-img']}>
                    <img src={item.img} alt="" />
                  </div>
                  <div className={style['card-title']}>
                    <span>{item.text}</span>
                  </div>
                </div>
                <div className={style['card-details']}>
                  <div className={style['card-slider']}>
                    <ImageSlider slides={item.slides} />
                  </div>
                  <div className={style['card-details-text']}>
                    <h1>{item.desc.title} {item.desc.square}м<sup>2</sup></h1>
                    <ul>
                      <h2>Включено:</h2>
                      {item.desc.include.map((option, i) => (
                        <li key={i}>{option}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </Container>
    </section>
  )
}
