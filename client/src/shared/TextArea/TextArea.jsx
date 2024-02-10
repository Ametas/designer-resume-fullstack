import React from 'react'
import style from './TextArea.module.scss'

function TextArea(props) {
    return (
        <textarea 
            className={style.textarea}
            placeholder={props.placeholder}
        >
        </textarea>
    )
}

export default TextArea