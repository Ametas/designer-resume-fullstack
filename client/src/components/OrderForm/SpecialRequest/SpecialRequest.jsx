import React from 'react'
import FormTitle from './../../FormTitle/FormTitle';
import TextArea from './../TextArea/TextArea';

function SpecialRequest() {
    return (
        <div className='special-request'>
            <FormTitle title="Особые запросы"/>
            <TextArea placeholder={"Поле можно оставить пустым, но рекомендуется заполнить, иначе Ваша заявка может быть не рассмотрена."}/>
        </div>
    )
}

export default SpecialRequest