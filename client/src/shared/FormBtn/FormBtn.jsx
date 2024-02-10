import React from 'react'
import style from './FormBtn.module.scss'

export function FormBtn(props) {
    const { btnText, onClick, isHide } = props
    return (
        <button onClick={onClick} className={`${style['form-btn']} ${isHide && style.hide}`}>
            {btnText || 'Button'}
        </button>
    )
}

export default FormBtn