import React from 'react'
import './ObjectDetails.scss'
import FormTitle from '../../FormTitle/FormTitle'
import FormSubTitle from './../../FormSubTitle/FormSubTitle';
import Input from './../Input/Input';

function ObjectDetails({ isActive }) {
    return (
        <div className={`object-details ${isActive ? '' : 'inactive'}`}>
            <FormTitle title="Характеристики объекта"/>
            <FormSubTitle text="Введите основную информацию об объекте."/>
            <div className="input-box">
                <Input 
                    id="object-square" 
                    label="Площадь помещения" 
                    placeholder="25 м.кв." 
                    autoComplete={''} 
                />
                <Input 
                    id="rooms-count" 
                    label="Количество комнат" 
                    placeholder="4" 
                    autoComplete={''} 
                />
                <Input 
                    id="light-preferences" 
                    label="Предпочтения относительно освещения" 
                    placeholder="Искусственный/Естественный свет" 
                    autoComplete={''} 
                />
            </div>
        </div>
    )
}

export default ObjectDetails