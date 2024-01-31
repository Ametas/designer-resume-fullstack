import React from 'react'
import FormTitle from './../../FormTitle/FormTitle';
import FormSubTitle from './../../FormSubTitle/FormSubTitle';
import ChooseCard from './../ChooseCard/ChooseCard';
import './SpecialRequirements.scss'

function SpecialRequirements() {
    return (
        <div className='placement-type'>
            <FormTitle title="Особые требования"/>
            <div className="cards-box">
                <ChooseCard 
                    id="for-childs"
                    text="Для детей"
                    isActive={true}
                />
                <ChooseCard 
                    id="for-elders"
                    text="Для пожилых"
                />
                <ChooseCard 
                    id="another"
                    text="Другое (уточняется индивидуально)"
                />
            </div>
        </div>
    )
}

export default SpecialRequirements