import React, { useState, useEffect } from 'react'
import style from './Input.module.scss'
import { FaPlus } from "react-icons/fa6";
import Dropdown from '../../features/Dropdown/Dropdown';
import { CSSTransition } from 'react-transition-group';

function Input(props) {
    const [open, setOpen] = useState(false)
    const [select, setSelect] = useState(null)
    const [value, setValue] = useState('')

    const handleSelection = (template) => {
        setSelect(template)
    }

    const handleInputChange = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        if(select) {
            setValue((prevValue) => prevValue + select)
        }
    }, [select])
    

    return (
        <div className={style['input-wrapper']}>
            <label htmlFor={props.id || "input"}>{props.label || 'input label'}</label>
            <div className={style["input-container"]}>
                <input
                    placeholder={props.placeholder || 'placeholder'}
                    id={props.id || 'input'}
                    type={props.type || 'text'}
                    value={value}
                    onChange={handleInputChange}
                />
                {props.autoComplete && 
                <div 
                    className={`${style['auto-complete']} ${!props.autoComplete && 'hidden'}
                    ${open && style.active}`}
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
                            onSelect={handleSelection}
                        />
                    </CSSTransition>
                </div>}
            </div>
        </div>
    )
}

export default Input