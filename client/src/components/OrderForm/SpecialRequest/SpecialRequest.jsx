import React from 'react'
import './SpecialRequest.scss'
import FormTitle from './../../FormTitle/FormTitle';
import TextArea from './../TextArea/TextArea';

function SpecialRequest({ isActive }) {
    return (
        <div className={`special-request ${isActive ? '' : 'inactive'}`}>
            <FormTitle title="Особые запросы"/>
            <TextArea placeholder={"Поле не обязательно к заполнению."}/>
        </div>
    )
}

export default SpecialRequest