import React from 'react'
import style from './style.module.scss'
import { Status } from './../../Status';

export const OrderCard = (props) => {
  const { 
    id,
    name,
    phone,
    email,
    address,
    date,
    price,
    rooms,
    square,
    placementType,
    specialRequests,
    interiorStyle,
    functionalRequests,
    status,
    comments, 
  } = props.data

  return (
    <div className={style.card}>
      <div className={style.info}>
        <div className={style['client-info']}>
          <div className={style.header}>
            <span className={style.id}>
              {id}
              <i>ID</i>
            </span>
            <span className={style.name}>
              {name}
              <i>ФИО</i>
            </span>
          </div>
          <div className={style.contacts}>
            <span className={style.phone}>
              {phone}
              <i>Телефон</i>
            </span>
            <span className={style.email}>
              {email}
              <i>Эл.Почта</i>
            </span>
          </div>
          <span>
            {address}
            <i>Адрес</i>
          </span>
          <div className={style['date-and-price']}>
            <span className={style.date}>
              {date}
              <i>Дата</i>
            </span>
            <span className={style.price}>
              {price}
              <i>Бюджет</i>
            </span>
          </div>
        </div>
        <div className={style['placement-info']}>
          <span>
            {rooms}
            <i>Кол-во комнат</i>
          </span>
          <span>
            {square}
            <i>м<sup>2</sup></i>
          </span>
          <span>
            {placementType}
            <i>Тип помещения</i>
          </span>
          <span>
            {specialRequests}
            <i>Особые треб-я</i>
          </span>
          <span>
            {interiorStyle}
            <i>Стиль интерьера</i>
          </span>
          <span>
            {functionalRequests}
            <i>Функциональные т-я</i>
          </span>
        </div>
      </div>
      <div className={style.details}>
        <span className={style.status}>
          <Status status={status} />
        </span>
        <span className={style.comments}>{comments}</span>
      </div>
    </div>
  )
}
