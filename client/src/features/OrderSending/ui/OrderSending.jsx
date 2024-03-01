import React from 'react'
import style from './style.module.scss'

import { FormTitle } from '@shared/FormTitle';
import { FormSubTitle } from '@shared/FormSubTitle';
import { ChooseCard } from '@shared/ChooseCard';

export const OrderSending = (props) => {
  return (
  <div className={`${style['order-sending']} ${!props.isActive && 'inactive'}`}>
    <FormTitle>Заявка успешно отправлена</FormTitle>
    <FormSubTitle>Приложить примеры желаемого дизайна интерьера?</FormSubTitle>
    <div className={style["cards-box"]}>
      <ChooseCard
        id="add-examples"
        text="Загрузить изображения"
      />
      <ChooseCard
        id="skip-examples"
        text="Пропустить"
      />
    </div>
  </div>
  )
}
