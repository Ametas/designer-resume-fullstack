import React, { useState } from 'react'
import './Input.scss'
import { FaPlus } from "react-icons/fa6";
import Dropdown from '../../Dropdown/Dropdown';
import { CSSTransition } from 'react-transition-group';

function Input(props) {
    const [open, setOpen] = useState(false)

    return (
        <div className='input-wrapper'>
            <label htmlFor={props.id || "input"}>{props.label || 'input label'}</label>
            <div className="input-container">
                <input
                    placeholder={props.placeholder || 'placeholder'}
                    id={props.id || 'input'}
                    type={props.type || 'text'}
                />
                {props.autoComplete && <div 
                    className={`auto-complete ${props.autoComplete ? '' : 'hidden'}
                    ${open ? "active" : ""}`}
                    onClick={() => setOpen(!open)}
                >
                    <FaPlus />
                    <CSSTransition
                        in={open}
                        unmountOnExit
                        timeout={{enter: 0, exit: 500}}
                        classNames={{
                            enterActive: 'dropdown-show',
                            enterDone: 'dropdown-show-done',
                        
                        }}
                    >
                        <Dropdown autoCompleteItems={ props.autoComplete } />
                    </CSSTransition>
                </div>}
            </div>
        </div>
    )
}

export default Input