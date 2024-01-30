import React from 'react';
import './Step.scss';

function Step({ step, isActive }) {
    return (
        <>
            <i className={`step ${isActive ? "active" : ""}`}>{step || '1'}</i>
            <span className={`line ${isActive ? "active" : ""}`}></span>
        </>
    );
}

export default Step;
