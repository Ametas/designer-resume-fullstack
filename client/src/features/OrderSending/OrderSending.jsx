import React from 'react'
import style from './OrderSending.module.scss'
import FormTitle from '../../shared/FormTitle/FormTitle';
import FormSubTitle from '../../shared/FormSubTitle/FormSubTitle';
import ChooseCard from '../../shared/ChooseCard/ChooseCard';

function OrderSending(props) {
    return (
        <div className={`${style['order-sending']} ${!props.isActive && 'inactive'}`}>
            <FormTitle title="Заявка успешно отправлена"/>
            <FormSubTitle text="Приложить примеры желаемого дизайна интерьера?"/>
            <div className={style["cards-box"]}>
                <ChooseCard
                    id="add-examples"
                    text="Загрузить изображения"
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