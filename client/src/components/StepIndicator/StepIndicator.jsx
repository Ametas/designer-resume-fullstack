import React from 'react'
import './StepIndicator.scss'
import Step from './Step/Step';

function StepIndicator({ step, stepCount, isHide }) {
    const steps = Array.from({ length: stepCount }).map((_, index) => index + 1)

    return (
        <div className={`indicator-wrapper ${isHide ? "hide" : ""}`}>
            {steps.map((currentStep) => (
                <Step 
                    key={currentStep}
                    step={currentStep}
                    isActive={step === currentStep - 1}
                    isCompleted={step >= currentStep}
                />
            ))}
        </div>
    )
}

export default StepIndicator