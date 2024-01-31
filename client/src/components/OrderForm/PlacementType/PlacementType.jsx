import React from 'react'
import FormTitle from './../../FormTitle/FormTitle';
import FormSubTitle from './../../FormSubTitle/FormSubTitle';
import ChooseCard from './../ChooseCard/ChooseCard';
import './PlacementType.scss'

function PlacementType() {
    return (
        <div className='placement-type'>
            <FormTitle title="Тип помещения"/>
            <FormSubTitle text="Выберите тип помещения."/>
            <div className="cards-box">
                <ChooseCard 
                    id="flat"
                    text="Квартира"
                    isActive={true}
                />
                <ChooseCard 
                    id="house"
                    text="Дом"
                    isActive={false}
                />
                <ChooseCard 
                    id="another"
                    text="Другое помещение (уточняется индивидуально)"
                    isActive={false}
                />
            </div>
        </div>
    )
}

export default PlacementType