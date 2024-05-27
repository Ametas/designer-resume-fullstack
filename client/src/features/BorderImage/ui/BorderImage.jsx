import React from 'react'
import style from './style.module.scss'

import bg from '@assets/images/photo-bg.png'

export const BorderImage = (props) => {
  return (
    <div className={style['border-image']}>
      <i className={style.background}>
        <img src={bg} alt="" />
      </i>
      <div className={style["image-border"]}>
        <img src={props.img} alt="" />
      </div>
    </div>
  )
}
