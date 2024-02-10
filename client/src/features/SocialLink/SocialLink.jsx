import React from 'react'
import style from './SocialLink.module.scss'

export function SocialLink(props) {
    const { icon: IconComponent } = props

    return (
        <a 
        target='_blank' 
        href={`https://${props.href}/${props.socialText}`} 
        className={style['social-link']}>
            <IconComponent />
            <span className={style["social-text"]}>{props.socialText}</span>
        </a>
    )
}

export default SocialLink