import React from 'react'
import style from './style.module.scss'
import { Status } from '../../Status'


export const OrderList = (props) => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>id</th>
          <th>ФИО</th>
          <th>Бюджет</th>
          <th>Адрес</th>
          <th>Дата</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((order) => {
          return (
            <tr onClick={() => props.onClick(order._id)} key={order._id}>
              <td id='id'>{order._id}</td>
              <td id='name'>{order.PersonalData.name}</td>
              <td id='budget'>{order.BudgetAndDate.budget.recommended}</td>
              <td id='address'>{order.PersonalData.address}</td>
              <td id='date'>{order.BudgetAndDate.date}</td>
              <td id='status' className={style[order.status]}>
                <Status status={order.status} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
