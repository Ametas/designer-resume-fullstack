import React, { useState } from 'react'
import FormTitle from '../../shared/FormTitle/FormTitle';
import ChooseCard from '../../shared/ChooseCard/ChooseCard';
import style from './SpecialRequirements.module.scss'

function SpecialRequirements(props) {
    const cards = [
        { id: 'for-childs', text: 'Для детей'},
        { id: 'for-elders', text: 'Для пожилых'},
        { id: 'for-another', text: 'Другое (уточняется индивидуально)'}
    ]

    const [selectedCard, setSelectedCard] = useState(cards[0].id)

    const handleCardClick = (cardId) => { setSelectedCard(cardId) }

    return (
        <div className={`${style['special-requierements']} ${!props.isActive && 'inactive'}`}>
            <FormTitle title="Особые требования"/>
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

export default SpecialRequirements