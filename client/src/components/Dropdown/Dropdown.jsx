import React, { useState } from 'react'
import './Dropdown.scss'

function Dropdown({ autoCompleteItems }) {

    function DropdownItem(props) {
        return (
            <a href="#" className="dropdown-item">
                {props.children}
            </a>
        )
    }

    return (
        <div className='dropdown'>
            {autoCompleteItems.map((item) => (
                <DropdownItem>{item}</DropdownItem>
            ))}
            {/* {console.log(autoCompleteItems)} */}
        </div>
    )
}

export default Dropdown