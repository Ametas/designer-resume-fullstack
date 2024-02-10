import React from 'react'
import style from './Preferences.module.scss'
import FormTitle from '../../shared/FormTitle/FormTitle';
import Input from '../../entities/Input/Input';

function Preferences(props) {
    const inputs = [
        {
            id: 'interior-style',
            placeholder: 'Классический',
            label: 'Стиль интерьера',
            autoComplete: ['Классический', 'Лофт', 'Модерн', 'Минимализм']
        },
        {
            id: 'color-scheme',
            placeholder: 'Основной: белый, дополнительный: черный',
            label: 'Цветовая схема',
            autoComplete: ['Черно-белые тона',  'Яркие цвета',  'Преимущественно бежевый']
        },
        {
            id: 'materials-and-texture',
            placeholder: 'Мраморная текстура стен, текстура песчаника на полу',
            label: 'Материал и текстура',
        },
        {
            id: 'functional-requirements',
            placeholder: 'Игровая комната, рабочее пространство',
            label: 'Функциональные требования',
            autoComplete: ['Жилое помещение', 'Офисное помещение', 'Торговое помещение', 'Медицинское учреждение', 'Рестораны и кафе', 'Спортивное помещение', 'Образовательное учреждение', 'Производственное помещение']
        }
    ]

    return (
        <div className={`${style['preferences']} ${!props.isActive && 'inactive'}`}>
            <FormTitle title="Ваши пожелания и предпочтения"/>
            <div className={style["input-box"]}>
                {inputs.map((input) => (
                    <Input 
                        key={input.id}
                        id={input.id}
                        placeholder={input.placeholder}
                        label={input.label}
                        autoComplete={input.autoComplete}
                    />
                ))}
            </div>
        </div>
    )
}

export default Preferences