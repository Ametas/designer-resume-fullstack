import React from 'react'
import FormTitle from './../../FormTitle/FormTitle';
import TextArea from './../TextArea/TextArea';

function Commentaries({ isActive }) {
    return (
        <div className={`commentaries ${isActive ? '' : 'inactive'}`}>
            <FormTitle title="Комментарии" />
            <TextArea placeholder={"Если остались дополнительные требования, которые не были указаны ранее, можете оставить их здесь. Также можете оставить социальные сети для связи. Поле не обязательно к заполнению."} />
        </div>
    )
}

export default Commentaries