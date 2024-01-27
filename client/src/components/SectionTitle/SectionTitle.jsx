import React, { Component } from 'react'
import './SectionTitle.scss'

export class SectionTitle extends Component {
    data = this.props.data || 'Section title'
    render() {
        return (
            <h2 className='section-title'>{this.data}</h2>
        )
    }
}

export default SectionTitle