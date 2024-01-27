import React, { Component } from 'react'
import './SupTitle.scss'

export class SupTitle extends Component {
    render() {
        return (
            <h3 className='sup-title'>{this.props.text || 'SupTitle'}</h3>
        )
    }
}

export default SupTitle