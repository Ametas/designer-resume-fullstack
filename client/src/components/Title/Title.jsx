import React, { Component } from 'react'
import './Title.scss'

export class Title extends Component {
    text = this.props.text || 'Title'

    render() {
        return (
            <h1 className='title'>{this.text}</h1>
        )
    }
}

export default Title