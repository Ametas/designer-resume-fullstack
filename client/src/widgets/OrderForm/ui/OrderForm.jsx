import React, { useState } from 'react'
import './OrderForm.scss'

import { StepIndicator } from '@features/StepIndicator'

import { PersonalData } from '@features/PersonalData'
import { ObjectDetails } from '@features/ObjectDetails'
import { PlacementType } from '@features/PlacementType'
import { SpecialRequirements } from '@features/SpecialRequirements'
import { Preferences } from '@features/Preferences'
import { Commentaries } from '@features/Commentaries'
import { OrderSending } from '@features/OrderSending'

import { BudgetAndDate } from '@features/BudgetAndDate';

import { FormBtn } from '@shared/FormBtn'
import Container from '@shared/Container/Container';

const steps = [
  {
    component: PersonalData,
    title: 'PersonalData',
  },
  {
    component: ObjectDetails,
    title: 'ObjectDetails',
  },
  {
    component: PlacementType,
    title: 'PlacementType',
  },
  {
    component: SpecialRequirements,
    title: 'SpecialRequirements',
  },
  {
    component: Preferences, //FIX
    title: 'Preferences',
  },  
  {
    component: BudgetAndDate,
    title: 'BudgetAndDate',
  },
  { 
    component: Commentaries,
    title: 'Commentaries',
  },
  {
    component: OrderSending,
    title: 'OrderSending',
  },

]

export const OrderForm = () => {
  const stepCount = steps.length - 1;

  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState({})

  const nextStep = (e) => {
    e.preventDefault()
    setActiveStep((prev) => Math.min(stepCount, prev + 1)) 
  }
  const prevStep = (e) => {
    e.preventDefault()
    setActiveStep((prev) => Math.max(0, prev - 1)) 
  }
  
  const handleStepClick = (clickedStep) => { setActiveStep(clickedStep) }

  const handleFormDataChange = (step, data) => {
    setFormData((prev) => ({ ...prev, [step]: data }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setActiveStep((prev) => Math.min(stepCount, prev + 1)) 

    console.log(formData)
    console.log(JSON.stringify(formData));

    fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <section className={`order`}>
      <Container>
          <form onSubmit={handleSubmit}>
            <StepIndicator
              stepCount={stepCount}
              step={activeStep}
              onStepClick={handleStepClick}
            />
              <div className="form-steps">
                {steps.map((item, index) => {
                  return <item.component 
                  key={index} isActive={activeStep === index} 
                  onUpdate={(data) => {handleFormDataChange(item.title, data)}} />
                })}
              </div>
              <div className="btns">
                <FormBtn 
                  isHide={activeStep === 0 || activeStep === stepCount} 
                  btnText="Назад" 
                  onClick={prevStep} 
                />
                <FormBtn 
                  isHide={activeStep === stepCount - 1 || activeStep === stepCount} 
                  btnText={'Далее'} 
                  onClick={nextStep} 
                />
                <FormBtn 
                  isHide={activeStep < stepCount - 1 || activeStep === stepCount} 
                  btnText={'Отправить заявку'} 
                  type="submit"
                  onClick={handleSubmit} 
                />
              </div>
          </form>
      </Container>
    </section>
  )
}
