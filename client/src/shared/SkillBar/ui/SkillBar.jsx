import React from 'react'
import style from './style.module.scss'

export const SkillBar = (props) => {
  const fillStyle = {
    width: `${props.percent}%`
  }
  
  return (
    <div className={style['skill-box']}>
      <span className={style.title}><b>{props.title || 'Title'}</b><i>{`${props.percent || '90'}%`}</i></span>
      <div className={style["skill-bar"]}>
        <div className={style["skill-percent"]} style={fillStyle}></div>
      </div>
    </div>
  )
}
