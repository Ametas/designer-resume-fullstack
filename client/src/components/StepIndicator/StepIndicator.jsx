import React from 'react'
import './StepIndicator.scss'
import Step from './Step/Step';

function StepIndicator() {
    return (
        <div className='indicator-wrapper'>
            <Step isActive='true' step={1}/>
            <Step isActive='true' step={1}/>
            <Step isActive='' step={1}/>
            <Step isActive='' step={1}/>
        </div>
    )
}

export default StepIndicator