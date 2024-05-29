import React, { useState } from 'react'
import style from './style.module.scss'

import Container from '@shared/Container/Container'
import { ImageSlider } from '@shared/ImageSlider'
import { Navbar } from '@features/Navbar';

import { apartmentContinentImages } from '@assets/images/portfolio/apartmentContinent/1/images.jsx';
import { apartmentOlympImages } from '@assets/images/portfolio/apartmentOlymp/1/images.jsx';
import { apartmentUpgradeImages } from '@assets/images/portfolio/apartmentUpgrade/1/images.jsx';
import { apartmentUpgradeImages2 } from '@assets/images/portfolio/apartmentUpgrade/2/images.jsx';
import { countryDubrovskieImages } from '@assets/images/portfolio/countryDubrovskie/1/images.jsx';
import { privatehouseBogoslovkaImages } from '@assets/images/portfolio/privatehouseBogoslovka/1/images.jsx';

const formatImages = (imageImports) => {
  return Object.keys(imageImports).map((key) => imageImports[key].default);
};

let portfolioData = [
  {
    id: 1,
    img: formatImages(apartmentContinentImages)[0],
    text: 'ЖК Континент',
    slides: formatImages(apartmentContinentImages),
  },
  {
    id: 2,
    img: formatImages(apartmentOlympImages)[3],
    text: 'ЖК Олимп',
    slides: formatImages(apartmentOlympImages),
  },
  {
    id: 3,
    img: formatImages(apartmentUpgradeImages)[2],
    text: 'ЖК Квартал Апгрейд',
    slides: formatImages(apartmentUpgradeImages)
  },
  {
    id: 4,
    img: formatImages(apartmentUpgradeImages2)[3],
    text: 'ЖК Квартал Апгрейд',
    slides: formatImages(apartmentUpgradeImages2),
  },
  {
    id: 5,
    img: formatImages(countryDubrovskieImages)[0],
    text: 'Загородный дом, поселок Дубровские зори, Московская обл.',
    slides: formatImages(countryDubrovskieImages),
  },
  {
    id: 6,
    img: formatImages(privatehouseBogoslovkaImages)[2],
    text: 'Частный дом, с. Богословка, Пензенская обл.',
    slides: formatImages(privatehouseBogoslovkaImages),
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
                </div>
              </div>
            ))}
          </div>
      </Container>
    </section>
  )
}
