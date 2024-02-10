import React from 'react'
import style from './SpecialRequest.module.scss'
import FormTitle from '../../shared/FormTitle/FormTitle';
import TextArea from '../../shared/TextArea/TextArea';

function SpecialRequest(props) {
    return (
        <div className={`${style['special-request']} ${!props.isActive && 'inactive'}`}>
            <FormTitle title="Особые запросы"/>
            <TextArea placeholder={"Поле не обязательно к заполнению."}/>
        </div>
    )
}

export default SpecialRequest