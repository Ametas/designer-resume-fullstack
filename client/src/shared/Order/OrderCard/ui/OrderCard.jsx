import React from 'react'
import style from './style.module.scss'
import { Status } from './../../Status';

export const OrderCard = (props) => {
  // if(!props.data) {
  //   return <div>Данные не загружены</div>
  // }
  let id = props.data?._id

  let clientName = props.data?.PersonalData.name
  let phone = props.data?.PersonalData.phone
  let email = props.data?.PersonalData.email
  let address = props.data?.PersonalData.address

  let date = props.data?.BudgetAndDate.date
  let budget = props.data?.BudgetAndDate.budget

  let rooms = props.data?.ObjectDetails.roomsCount
  let square = props.data?.ObjectDetails.objectSquare
  let lightPreferences = props.data?.ObjectDetails.lightPreferences

  let placementType = props.data?.PlacementType.text

  let specialRequests = props.data?.SpecialRequirements.text

  let interiorStyle = props.data?.Preferences['interior-style']
  let materials = props.data?.Preferences['materials-and-texture']
  let colorScheme = props.data?.Preferences['color-scheme']
  let functionalRequests = props.data?.Preferences['functional-requirements']


  let comments = props.data?.Commentaries

  let status = props.data?.status
  {console.log(props.data)}


  // const { 
  //   id, //
  //   name, //
  //   phone, //
  //   email, //
  //   address, //
  //   date, //
  //   price, //
  //   rooms, //
  //   square, //
  //   placementType,
  //   specialRequests,
  //   interiorStyle,
  //   functionalRequests,
  //   status,
  //   comments, 
  // } = props.data

  return (
    <div className={style.card}>
      {console.log(props.data)}
      <div className={style.info}>
        <div className={style['client-info']}>
          <div className={style.header}>
            <span className={style.id}>
              {id}
              <i>ID</i>
            </span>
          </div>
          <div>
            <span className={style.name}>
              {clientName}
              <i>ФИО</i>
            </span>
            <span className={style.date}>
              {date}
              <i>Дата</i>
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
          <div className={style.budget}>
            <span className={style.price}>
              {budget.recommended}
              <i>Мин. бюджет</i>
            </span>
            <span className={style.price}>
              {budget.recommended}
              <i>Рек. бюджет</i>
            </span>
            <span className={style.price}>
              {budget.recommended}
              <i>Макс. бюджет</i>
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
            {lightPreferences}
            <i>Освещение</i>
          </span>
          <span>
            {materials}
            <i>Материалы и текстура</i>
          </span>
          <span>
            {functionalRequests}
            <i>Функциональные треб-я</i>
          </span>
        </div>
        <div className={style.prefs}>
          <span>
            {colorScheme}
            <i>Цветовая схема</i>
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
