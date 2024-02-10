import React from 'react'
import style from './Commentaries.module.scss'
import FormTitle from '../../shared/FormTitle/FormTitle';
import TextArea from '../../shared/TextArea/TextArea';

function Commentaries(props) {
    return (
        <div className={`${style['commentaries']} ${!props.isActive && 'inactive'}`}>
            <FormTitle title="Комментарии" />
            <TextArea placeholder={"Если остались дополнительные требования, которые не были указаны ранее, можете оставить их здесь. Также можете оставить социальные сети для связи. Поле не обязательно к заполнению."} />
        </div>
    )
}

export default Commentaries