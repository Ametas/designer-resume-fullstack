import React from 'react'
import style from './style.module.scss'

import { SkillBar } from '@shared/SkillBar'

export const SkillBox = (props) => {
  return (
    <div className={style['skill-box']}>
      {props.data.map((item, index) => (
        <SkillBar key={index} title={item.title} percent={item.percent} />
      ))}
    </div>
  )
}
