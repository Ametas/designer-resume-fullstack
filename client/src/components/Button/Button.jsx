import React, { Component } from 'react'
import './Button.scss'

export class Button extends Component {
    variable = this.props.variable || 'primary'

    style = this.variable === 'primary' ? 'button primary' : 'button secondary'

    render() {
        return (
            <button className={this.style}>{this.props.text || 'Button'}</button>
        )
    }
}

export default Button