import React from 'react';
import style from './Step.module.scss';

function Step(props) {
    const { step, isActive, isCompleted } = props
    return (
        <>
            <i className={`
                    ${style['step']} 
                    ${isActive ? style.active : ""}
                    ${isCompleted ? style.completed : ""}
                `}>
                {step || '1'}
            </i>
            <span className={`
                    ${style['line']} 
                    ${isActive ? style.active : ""}
                    ${isCompleted ? style.completed: ""}
                `}>
            </span>
        </>
    );
}

export default Step;
