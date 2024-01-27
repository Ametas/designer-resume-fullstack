import React, { Component } from 'react'
import './PreviewCard.scss'

export class PreviewCard extends Component {
    img = this.props.img || 'None'
    render() {
        return (
            <li className='preview-item'>
                <img src={this.img} alt="Portfolio Image" />
            </li>
        )
    }
}

export default PreviewCard