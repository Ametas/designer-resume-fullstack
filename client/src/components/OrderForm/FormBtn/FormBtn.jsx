import React from 'react'
import './FormBtn.scss'

function FormBtn({ btnText, onClick, isHide }) {
    return (
        <button onClick={onClick} className={`form-btn ${isHide ? "hide" : ""}`}>
            {btnText || 'Button'}
        </button>
    )
}

export default FormBtn