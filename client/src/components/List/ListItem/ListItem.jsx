import React, { Component } from 'react'
import './ListItem.scss'

export class ListItem extends Component {
    text = this.props.text
    href = this.props.href
    render() {
        return (
            <li className='list-item'><a href={this.href}>{this.text}</a></li>
        )
    }
}

export default ListItem