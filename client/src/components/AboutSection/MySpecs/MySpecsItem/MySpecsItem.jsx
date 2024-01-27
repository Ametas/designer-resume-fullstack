import React, { Component } from 'react'
import './MySpecsItem.scss'

export class MySpecsItem extends Component {
    title = this.props.title || 'title'
    values = this.props.values || 'value'
    render() {
        return (
            <li className='specs-item'>
                <strong>{this.title} :</strong>
                {this.values}
            </li>
        )
    }
}

export default MySpecsItem