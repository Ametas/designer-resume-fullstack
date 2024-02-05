import React, { useState, useEffect } from 'react'
import './Input.scss'
import { FaPlus } from "react-icons/fa6";
import Dropdown from '../../Dropdown/Dropdown';
import { CSSTransition } from 'react-transition-group';

function Input(props) {
    const [open, setOpen] = useState(false)
    const [selectedTemplate, setSelectedTemplate] = useState(null)
    const [value, setValue] = useState('')

    const handleTemplateSelection = (template) => {
        setSelectedTemplate(template)
    }

    const handleInputChange = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        if(selectedTemplate) {
            setValue((prevValue) => prevValue + selectedTemplate)
        }
    }, [selectedTemplate])
    

    return (
        <div className='input-wrapper'>
            <label htmlFor={props.id || "input"}>{props.label || 'input label'}</label>
            <div className="input-container">
                <input
                    placeholder={props.placeholder || 'placeholder'}
                    id={props.id || 'input'}
                    type={props.type || 'text'}
                    value={value}
                    onChange={handleInputChange}
                />
                {props.autoComplete && 
                <div 
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
                            exitActive: 'dropdown-exit',
                        }}
                    >
                        <Dropdown 
                            autoCompleteItems={ props.autoComplete }
                            onSelect={handleTemplateSelection}
                        />
                    </CSSTransition>
                </div>}
            </div>
        </div>
    )
}

export default Input