import React, { useState } from 'react'
import Container from '../Container/Container'
import './OrderForm.scss'
import StepIndicator from '../StepIndicator/StepIndicator'
import PersonalData from './PersonalData/PersonalData'
import ObjectDetails from './ObjectDetails/ObjectDetails'
import PlacementType from './PlacementType/PlacementType'
import SpecialRequirements from './SpecialRequirements/SpecialRequirements'
import Preferences from './Preferences/Preferences';
import SpecialRequest from './SpecialRequest/SpecialRequest'
import Commentaries from './Commentaries/Commentaries';
import FormBtn from './FormBtn/FormBtn';
import OrderSending from './OrderSending/OrderSending'

function OrderForm() {
    const stepCount = 7;

    const [activeStep, setActiveStep] = useState(0)

    const nextStep = () => { setActiveStep((prev) => Math.min(stepCount, prev + 1)) }
    const prevStep = () => { setActiveStep((prev) => Math.max(0, prev - 1)) }

    return (
        <section className='order'>
            <Container>
                <div className="form-wrapper">
                    <StepIndicator isHide={activeStep === 7} stepCount={stepCount} step={activeStep} />
                    <form action="">
                        <PersonalData isActive={activeStep === 0} />
                        <ObjectDetails isActive={activeStep === 1} />
                        <PlacementType isActive={activeStep === 2} />
                        <SpecialRequirements isActive={activeStep === 3} />
                        <Preferences isActive={activeStep === 4} />
                        <SpecialRequest isActive={activeStep === 5} />
                        <Commentaries isActive={activeStep === 6} />
                        <OrderSending isActive={activeStep === 7} />
                    </form>
                </div>
                <div className="btns">
                    <FormBtn 
                        isHide={activeStep === 0 || activeStep === stepCount} 
                        btnText="Назад" 
                        onClick={prevStep} 
                    />
                    <FormBtn 
                        isHide={activeStep === stepCount} 
                        btnText={activeStep < stepCount - 1 ? 'Далее' : 'Отправить заявку'} 
                        onClick={nextStep} 
                    />
                </div>
            </Container>
        </section>
    )
}

export default OrderForm