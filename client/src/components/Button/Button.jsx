import React, { Component } from 'react'
import './Button.scss'

export class Button extends Component {
    text = this.props.text || 'Button'
    variable = this.props.variable || 'primary'

    style = this.variable === 'primary' ? 'button primary' : 'button secondary'

    render() {
        return (
            <button className={this.style}>{this.text}</button>
        )
    }
}

export default Button