import React, { Component } from 'react'
import './Title.scss'

export class Title extends Component {
    render() {
        return (
            <h1 className='title'>{this.props.text || 'Title'}</h1>
        )
    }
}

export default Title