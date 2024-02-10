import React from 'react'
import style from './PersonalData.module.scss'
import Input from '../../entities/Input/Input';
import FormTitle from '../../shared/FormTitle/FormTitle';
import FormSubTitle from '../../shared/FormSubTitle/FormSubTitle';

export function PersonalData(props) {
    return (
        <div className={`${style['personal-data']} ${!props.isActive && 'inactive'}`}>
            <FormTitle title="Контактная информация"/>
            <FormSubTitle text="Заполните информацию о себе, чтобы мы могли связаться с Вами."/>
            <div className={style['input-box']}>
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