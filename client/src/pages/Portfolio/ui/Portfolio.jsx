import React, { useState } from 'react'
import style from './style.module.scss'

import Container from '@shared/Container/Container'
import { ImageSlider } from '@shared/ImageSlider'
import { Navbar } from '@features/Navbar';

let portfolioData = [
  {
    id: 1,
    img: '/src/assets/images/portfolio/apartmentContinent/1/1.jpg',
    text: 'ЖК Континент',
    slides: [
      '/src/assets/images/portfolio/apartmentContinent/1/1.jpg',
      '/src/assets/images/portfolio/apartmentContinent/1/2.jpg',
      '/src/assets/images/portfolio/apartmentContinent/1/3.jpg',
      '/src/assets/images/portfolio/apartmentContinent/1/4.jpg',
      '/src/assets/images/portfolio/apartmentContinent/1/5.jpg',
      '/src/assets/images/portfolio/apartmentContinent/1/6.jpg',
      '/src/assets/images/portfolio/apartmentContinent/1/7.jpg',
      '/src/assets/images/portfolio/apartmentContinent/1/8.jpg',
      '/src/assets/images/portfolio/apartmentContinent/1/9.jpg',
      '/src/assets/images/portfolio/apartmentContinent/1/10.jpg',
      '/src/assets/images/portfolio/apartmentContinent/1/11.jpg',
    ],
  },
  {
    id: 2,
    img: '/src/assets/images/portfolio/apartmentOlymp/1/4.jpg',
    text: 'ЖК Олимп',
    slides: [
      '/src/assets/images/portfolio/apartmentOlymp/1/1.jpg',
      '/src/assets/images/portfolio/apartmentOlymp/1/2.jpg',
      '/src/assets/images/portfolio/apartmentOlymp/1/3.jpg',
      '/src/assets/images/portfolio/apartmentOlymp/1/4.jpg',
      '/src/assets/images/portfolio/apartmentOlymp/1/5.jpg',
      '/src/assets/images/portfolio/apartmentOlymp/1/6.jpg',
      '/src/assets/images/portfolio/apartmentOlymp/1/7.jpg',
      '/src/assets/images/portfolio/apartmentOlymp/1/8.jpg',
    ],
  },
  {
    id: 3,
    img: '/src/assets/images/portfolio/apartmentUpgrade/1/3.jpg',
    text: 'ЖК Квартал Апгрейд',
    slides: [
      '/src/assets/images/portfolio/apartmentUpgrade/1/1.jpg',
      '/src/assets/images/portfolio/apartmentUpgrade/1/2.jpg',
      '/src/assets/images/portfolio/apartmentUpgrade/1/3.jpg',
    ],
  },
  {
    id: 4,
    img: '/src/assets/images/portfolio/apartmentUpgrade/2/3.jpg',
    text: 'ЖК Квартал Апгрейд',
    slides: [
      '/src/assets/images/portfolio/apartmentUpgrade/2/1.jpg',
      '/src/assets/images/portfolio/apartmentUpgrade/2/2.jpg',
      '/src/assets/images/portfolio/apartmentUpgrade/2/3.jpg',
      '/src/assets/images/portfolio/apartmentUpgrade/2/4.jpg',
      '/src/assets/images/portfolio/apartmentUpgrade/2/5.jpg',
      '/src/assets/images/portfolio/apartmentUpgrade/2/6.jpg',
      '/src/assets/images/portfolio/apartmentUpgrade/2/7.jpg',
    ],
  },
  {
    id: 5,
    img: '/src/assets/images/portfolio/countryDubrovskie/1/1.jpg',
    text: 'Загородный дом, поселок Дубровские зори, Московская обл.',
    slides: [
      '/src/assets/images/portfolio/countryDubrovskie/1/1.jpg',
      '/src/assets/images/portfolio/countryDubrovskie/1/2.jpg',
      '/src/assets/images/portfolio/countryDubrovskie/1/3.jpg',
      '/src/assets/images/portfolio/countryDubrovskie/1/4.jpg',
      '/src/assets/images/portfolio/countryDubrovskie/1/5.jpg',
      '/src/assets/images/portfolio/countryDubrovskie/1/6.jpg',
      '/src/assets/images/portfolio/countryDubrovskie/1/7.jpg',
      '/src/assets/images/portfolio/countryDubrovskie/1/8.jpg',
    ],
  },
  {
    id: 6,
    img: '/src/assets/images/portfolio/privatehouseBogoslovka/1/3.jpg',
    text: 'Частный дом, с. Богословка, Пензенская обл.',
    slides: [
      '/src/assets/images/portfolio/privatehouseBogoslovka/1/1.jpg',
      '/src/assets/images/portfolio/privatehouseBogoslovka/1/2.jpg',
      '/src/assets/images/portfolio/privatehouseBogoslovka/1/3.jpg',
      '/src/assets/images/portfolio/privatehouseBogoslovka/1/4.jpg',
      '/src/assets/images/portfolio/privatehouseBogoslovka/1/5.jpg',
      '/src/assets/images/portfolio/privatehouseBogoslovka/1/6.jpg',
      '/src/assets/images/portfolio/privatehouseBogoslovka/1/7.jpg',
      '/src/assets/images/portfolio/privatehouseBogoslovka/1/8.jpg',
    ],
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
