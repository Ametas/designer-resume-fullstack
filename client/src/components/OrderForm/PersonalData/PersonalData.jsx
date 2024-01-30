import React from 'react'
import './PersonalData.scss'
import Input from './../Input/Input';

function PersonalData() {
    return (
        <div className='personal-data'>
            <h4 className="form-step-title">Contact details</h4>
            <span className='form-step-subtitle'>
                Please fill your information so we can get in touch with you.
            </span>
            <div className="input-box">
                <Input autoComplete={'placeholder'} />
                <Input autoComplete={'placeholder'} />
                <Input />
                <Input />
            </div>
        </div>
    )
}

export default PersonalData