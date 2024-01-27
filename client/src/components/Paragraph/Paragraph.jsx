import React, { Component } from 'react'
import './Paragraph.scss'

export class Paragraph extends Component {
    text = this.props.text || 'Paragraph'

    render() {
        return (
            <p className='parag'>{this.text}</p>
        )
    }
}

export default Paragraph