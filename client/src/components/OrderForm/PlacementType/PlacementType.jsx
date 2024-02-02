import React, { useState } from 'react'
import FormTitle from './../../FormTitle/FormTitle';
import FormSubTitle from './../../FormSubTitle/FormSubTitle';
import ChooseCard from './../ChooseCard/ChooseCard';
import './PlacementType.scss'

function PlacementType({ isActive }) {
    const cards = [
        { id: 'flat', text: 'Квартира'},
        { id: 'house', text: 'Дом'},
        { id: 'another', text: 'Другое помещение (уточняется индивидуально)'}
    ]

    const [selectedCard, setSelectedCard] = useState(cards[0].id)

    const handleCardClick = (cardId) => { setSelectedCard(cardId) }

    return (
        <div className={`placement-type ${isActive ? '' : 'inactive'}`}>
            <FormTitle title="Тип помещения"/>
            <FormSubTitle text="Выберите тип помещения."/>
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

export default PlacementType