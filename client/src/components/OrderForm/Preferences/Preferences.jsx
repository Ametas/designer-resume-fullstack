import React from 'react'
import './Preferences.scss'
import FormTitle from './../../FormTitle/FormTitle';
import Input from './../Input/Input';

function Preferences({ isActive }) {
    return (
        <div className={`preferences ${isActive ? '' : 'inactive'}`}>
            <FormTitle title="Ваши пожелания и предпочтения"/>
            <div className="input-box">
                <Input 
                    id="interior-style"
                    placeholder={"Классический"}
                    label="Стиль интерьера"
                    autoComplete={"a"}
                />
                <Input 
                    id="color-scheme"
                    placeholder={"Основной: белый, дополнительный: черный"}
                    label="Цветовая схема"
                    autoComplete={"a"}
                />
                <Input 
                    id="materials-and-texture"
                    placeholder={"Дерево/гладкое, металл/матовый"}
                    label="Материал и текстура"
                    autoComplete={"a"}
                />
                <Input 
                    id="functional-requirements"
                    placeholder={"Игровая комната, рабочее пространство"}
                    label="Функциональные требования"
                    autoComplete={"a"}
                />
            </div>
        </div>
    )
}

export default Preferences