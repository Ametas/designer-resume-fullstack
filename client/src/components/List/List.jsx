import React, { Component } from 'react'
import './List.scss'
import ListItem from './ListItem/ListItem'

export class List extends Component {
    data = this.props.data || [
        {
            text: 'list',
            href: '#'
        }
    ]
    render() {
        return (
            <ul className='list'>
                {this.data.map((item, i) => (
                    <ListItem key={i} href={item.href} text={item.text} />
                ))}
            </ul>
        )
    }
}

export default List