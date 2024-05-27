import React from 'react'
import style from './style.module.scss'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const ImageSlider = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    arrows: false,
    variableWidth: true,
  }
  
  return (
    <Slider {...settings}>
      {props.slides.map((slide, index) => (
        <div className={style.slide} key={index}>
          <SlideWrapper>
            <img src={slide} alt="" />
          </SlideWrapper>
        </div>
      ))}
    </Slider>
  )
}

const SlideWrapper = props => {
  return (
    <div className={style['slide-wrapper']}>
      {props.children}
    </div>
  )
}