import React, { useState } from 'react'
import './OrderForm.scss'
import StepIndicator from '../../features/StepIndicator/StepIndicator'
import PersonalData from '../../features/PersonalData/PersonalData'
import ObjectDetails from '../../features/ObjectDetails/ObjectDetails'
import PlacementType from '../../features/PlacementType/PlacementType'
import SpecialRequirements from '../../features/SpecialRequirements/SpecialRequirements'
import SpecialRequest from '../../features/SpecialRequest/SpecialRequest'
import Preferences from '../../features/Preferences/Preferences'
import Commentaries from '../../features/Commentaries/Commentaries'
import FormBtn from '../../shared/FormBtn/FormBtn'
import OrderSending from '../../features/OrderSending/OrderSending'
import Container from '../../shared/Container/Container';

export function OrderForm() {
    const stepCount = 7;

    const [activeStep, setActiveStep] = useState(0)

    const nextStep = () => { setActiveStep((prev) => Math.min(stepCount, prev + 1)) }
    const prevStep = () => { setActiveStep((prev) => Math.max(0, prev - 1)) }
    const handleStepClick = (clickedStep) => { setActiveStep(clickedStep) }

    return (
        <section className={`order`}>
            <Container>
                <div className="form-wrapper">
                    <StepIndicator 
                        isHide={activeStep === 7} 
                        stepCount={stepCount} 
                        step={activeStep} 
                        onStepClick={handleStepClick}
                    />
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