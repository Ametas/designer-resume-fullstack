import React, { useState } from 'react'
import style from './style.module.scss'

import FormTitle from '@shared/FormTitle/FormTitle';
import FormSubTitle from '@shared/FormSubTitle/FormSubTitle';
import { ChooseCard } from '@shared/ChooseCard';

export const PlacementType = (props) => {
  const cards = [
      { id: 'flat', text: 'Квартира'},
      { id: 'house', text: 'Дом'},
      { id: 'another', text: 'Другое помещение (уточняется индивидуально)'}
  ]

  const [selectedCard, setSelectedCard] = useState(cards[0].id)

  const handleCardClick = (cardId) => { setSelectedCard(cardId) }

  return (
    <div className={`${style['placement-type']} ${!props.isActive && 'inactive'}`}>
      <FormTitle title="Тип помещения"/>
      <FormSubTitle text="Выберите тип помещения."/>
      <div className={style["cards-box"]}>
        {cards.map((card) => (
          <ChooseCard 
            key={card.id}
            id={card.id}
            text={card.text}
            isActive={selectedCard === card.id}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  )
}
