import React from 'react'
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

function OrderForm() {
    return (
        <section className='order'>
            <Container>
                <div className="form-wrapper">
                    <StepIndicator />
                    <form action="">
                        {/* <PersonalData /> */}
                        {/* <ObjectDetails /> */}
                        {/* <PlacementType /> */}
                        {/* <SpecialRequirements /> */}
                        {/* <Preferences /> */}
                        {/* <SpecialRequest /> */}
                        <Commentaries />
                    </form>
                </div>
                <div className="btns">
                    <FormBtn btnText="Назад" />
                    <FormBtn btnText="Далее" />
                </div>
            </Container>
        </section>
    )
}

export default OrderForm