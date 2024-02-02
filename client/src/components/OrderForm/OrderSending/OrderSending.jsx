import React from 'react'
import './OrderSending.scss'
import FormTitle from './../../FormTitle/FormTitle';
import FormSubTitle from './../../FormSubTitle/FormSubTitle';
import ChooseCard from './../ChooseCard/ChooseCard';

function OrderSending({ isActive }) {
    return (
        <div className={`order-sending ${isActive ? '' : 'inactive'}`}>
            <FormTitle title="Заявка успешно отправлена"/>
            <FormSubTitle text="Приложить примеры желаемого дизайна интерьера?"/>
            <div className="cards-box">
                <ChooseCard
                    id="add-examples"
                    text="Загрузить изображения"
                    isActive={false}
                />
                <ChooseCard
                    id="skip-examples"
                    text="Пропустить"
                    isActive={true}
                />
            </div>
        </div>
    )
}

export default OrderSending