import React, { Component } from 'react'
import './Paragraph.scss'

export class Paragraph extends Component {
    render() {
        return (
            <p className='parag'>{this.props.text || 'Paragraph'}</p>
        )
    }
}

export default Paragraph