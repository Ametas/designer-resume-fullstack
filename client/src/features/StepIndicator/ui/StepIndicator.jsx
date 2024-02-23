import React from 'react'
import './style.scss'

import { Step } from '@shared/Step';

export const StepIndicator = (props) => {
  const { step, stepCount, isHide, onStepClick } = props

  const steps = Array.from({ length: stepCount }).map((_, index) => index + 1)

  return (
    <div className={`indicator-wrapper ${isHide ? "hide" : ""}`}>
      {steps.map((currentStep) => (
        <Step 
          key={currentStep}
          step={currentStep}
          isActive={step === currentStep - 1}
          isCompleted={step >= currentStep}
          onClick={() => onStepClick(currentStep - 1)}
        />
      ))}
    </div>
  )
}
