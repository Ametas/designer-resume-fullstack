import React, { useState } from 'react'
import style from './style.module.scss'

import { FormTitle } from '@shared/FormTitle';
import { ChooseCard } from '@shared/ChooseCard';

export const SpecialRequirements = (props) => {
  const cards = [
    { id: 'for-childs', text: 'Для детей'},
    { id: 'for-elders', text: 'Для пожилых'},
    { id: 'for-another', text: 'Другое (уточняется индивидуально)'}
  ]

  const [selectedCard, setSelectedCard] = useState('')

  const handleCardClick = (card) => { 
    setSelectedCard(card) 
    props.onUpdate(selectedCard)
  }

  return (
    <div className={`${style['special-requierements']} ${!props.isActive && 'inactive'}`}>
      <FormTitle>Особые требования</FormTitle>
      <div className={style["cards-box"]}>
        {cards.map((card) => (
          <ChooseCard 
            key={card.id}
            id={card.id}
            text={card.text}
            isActive={selectedCard.id === card.id}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
    </div>
  )
}
