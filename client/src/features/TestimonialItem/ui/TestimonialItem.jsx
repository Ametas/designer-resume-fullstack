import React from 'react'
import style from './style.module.scss'

import { Paragraph } from '@shared/Paragraph'
import { FaQuoteLeft } from "react-icons/fa";

export const TestimonialItem = (props) => {
  return (
    <div className={style['testimonial-item']}>
      <div className={style["testimonial-content"]}>
        <div className={style["testimonial-header"]}>
          <div className={style["testimonial-title"]}>
            <b className={style.author}>{props.author}</b>
            <FaQuoteLeft />
          </div>
          <span className={style['author-role']}>{props.authorRole}</span>
        </div>
        <Paragraph>{props.text}</Paragraph>
      </div>
      <div className={style["author-image"]}>
        <img src={props.img} alt="Author Image" />
      </div>
    </div>
  )
}
