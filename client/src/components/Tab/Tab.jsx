import React, { Component } from 'react'
import './Tab.scss'

export class Tab extends Component {
    text = this.props.text || 'Tab'
    isActive = this.props.isActive || false
    href = this.props.href || '#'
    render() {
        return (
            <a 
            href={this.href} 
            className={`tab ${this.isActive ? 'active' : ''}`}>
                {this.text}
            </a>
        )
    }
}

export default Tab