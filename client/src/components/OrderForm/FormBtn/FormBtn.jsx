import React from 'react'
import './FormBtn.scss'

function FormBtn({ btnText }) {
    return (
        <button className='form-btn'>
            {btnText || 'Button'}
        </button>
    )
}

export default FormBtn