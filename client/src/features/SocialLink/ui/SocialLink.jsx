import React from 'react'
import style from './style.module.scss'

export const SocialLink = (props) => {
  const { icon: IconComponent } = props

  return (
    <a 
      target='_blank' 
      href={`https://${props.href}/${props.socialText}`} 
      className={style['social-link']}
    >
      <IconComponent />
      <span className={style["social-text"]}>
        {props.socialText}
      </span>
    </a>
  )
}
