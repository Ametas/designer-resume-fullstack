import React from 'react'
import FormTitle from './../../FormTitle/FormTitle';
import TextArea from './../TextArea/TextArea';

function Commentaries() {
    return (
        <div className='commentaries'>
            <FormTitle title="Комментарии"/>
            <TextArea placeholder={"Если остались дополнительные требования, которых не было ранее, можете оставить их здесь. Поле не обязательно к заполнению/"}/>
        </div>
    )
}

export default Commentaries