import React from 'react'
import './Input.scss'
import { FaPlus } from "react-icons/fa6";

function Input({ id, label, placeholder, autoComplete }) {
    
    return (
        <div className='input-wrapper'>
            <label htmlFor={id || "input"}>{label || 'input label'}</label>
            <div className="input-container">
                <input
                    placeholder={placeholder || 'placeholder'}
                    id={id || 'input'}
                />
                <button className={`auto-complete ${autoComplete ? '' : 'hidden'}`}>
                    <FaPlus />
                </button>
            </div>
        </div>
    )
}

export default Input