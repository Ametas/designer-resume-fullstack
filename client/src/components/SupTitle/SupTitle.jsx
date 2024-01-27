import React, { Component } from 'react'
import './SupTitle.scss'

export class SupTitle extends Component {
    text = this.props.text || 'SupTitle'

    render() {
        return (
            <h3 className='sup-title'>{this.text}</h3>
        )
    }
}

export default SupTitle