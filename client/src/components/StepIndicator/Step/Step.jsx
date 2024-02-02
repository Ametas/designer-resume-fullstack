import React from 'react';
import './Step.scss';

function Step({ step, isActive, isCompleted }) {
    return (
        <>
            <i className={`
                    step 
                    ${isActive ? "active" : ""}
                    ${isCompleted ? "completed": ""}
                `}>
                {step || '1'}
            </i>
            <span className={`
                    line 
                    ${isCompleted ? "completed": ""}
                `}>
            </span>
        </>
    );
}

export default Step;
