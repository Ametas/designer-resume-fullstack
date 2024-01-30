import React from 'react'
import Container from '../Container/Container'
import './OrderForm.scss'
import StepIndicator from '../StepIndicator/StepIndicator'
import PersonalData from './PersonalData/PersonalData'

function OrderForm() {
    return (
        <section className='order'>
            <Container>
                <div className="form-wrapper">
                    <StepIndicator />
                    <form action="">
                        <PersonalData />
                    </form>
                </div>
            </Container>
        </section>
    )
}

export default OrderForm