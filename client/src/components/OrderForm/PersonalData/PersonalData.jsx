import React from 'react'
import './PersonalData.scss'
import Input from './../Input/Input';
import FormTitle from './../../FormTitle/FormTitle';
import FormSubTitle from '../../FormSubTitle/FormSubTitle';

function PersonalData() {
    return (
        <div className='personal-data'>
            <FormTitle title="Контактная информация"/>
            <FormSubTitle text="Заполните информацию о себе, чтобы мы могли связаться с Вами."/>
            <div className="input-box">
                <Input 
                    id="name" 
                    label="ФИО" 
                    placeholder="Ваше ФИО" 
                    autoComplete={''} 
                />
                <Input 
                    id="email" 
                    label="Электронная почта" 
                    placeholder="Ваш E-Mail" 
                    autoComplete={''} 
                />
                <Input 
                    id="phone"
                    type="tel"
                    label="Номер телефона" 
                    placeholder="+7 000 000-00-00" 
                    autoComplete={''} 
                />
                <Input 
                    id="address"
                    label="Адрес объекта" 
                    placeholder="Введите адрес объекта" 
                    autoComplete={''} 
                />

            </div>
        </div>
    )
}

export default PersonalData