import React from 'react'
import './FormSubTitle.scss'

function FormSubTitle({ text }) {
    return (
        <span className='form-step-subtitle'>
            {text}
        </span>
    )
}

export default FormSubTitle