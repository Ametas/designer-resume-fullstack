import React from 'react'
import './TextArea.scss'

function TextArea({ placeholder }) {
    return (
        <textarea 
            className='form-text-area'
            placeholder={placeholder}
        >
        </textarea>
    )
}

export default TextArea