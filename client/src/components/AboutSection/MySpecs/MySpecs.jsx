import React, { Component } from 'react'
import './MySpecs.scss'

import MySpecsItem from './MySpecsItem/MySpecsItem'

export class MySpecs extends Component {
    specs = [
        {
            title: 'Birthday',
            value: '15 April, 1990'
        },
        {
            title: 'Website',
            value: 'www.www.com'
        },
        {
            title: 'Phone',
            value: '7 777 777 77 77'
        },
        {
            title: 'Study',
            value: 'Univercity of Harward'
        },
        {
            title: 'Degree',
            value: 'Master'
        },
        {
            title: 'Mail',
            value: 'info@info.ru'
        },
        {
            title: 'LinkedIn',
            value: '@wwww'
        },
        {
            title: 'Freelance',
            value: 'Available'
        },
    ]


    render() {
        return (
            <ul className='specs-list'>
                {this.specs.map((item, index) => (
                    <MySpecsItem key={index} values={item.value} title={item.title} />
                ))}
            </ul>
        )
    }
}

export default MySpecs