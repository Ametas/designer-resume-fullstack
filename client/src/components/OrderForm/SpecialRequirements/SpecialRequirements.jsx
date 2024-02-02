import React, { useState } from 'react'
import FormTitle from './../../FormTitle/FormTitle';
import ChooseCard from './../ChooseCard/ChooseCard';
import './SpecialRequirements.scss'

function SpecialRequirements({ isActive }) {
    const cards = [
        { id: 'for-childs', text: 'Для детей'},
        { id: 'for-elders', text: 'Для пожилых'},
        { id: 'for-another', text: 'Другое (уточняется индивидуально)'}
    ]

    const [selectedCard, setSelectedCard] = useState(cards[0].id)

    const handleCardClick = (cardId) => { setSelectedCard(cardId) }

    return (
        <div className={`special-requierements ${isActive ? '' : 'inactive'}`}>
            <FormTitle title="Особые требования"/>
            <div className="cards-box">
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