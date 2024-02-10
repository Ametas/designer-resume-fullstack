import React, { Component } from 'react'
import style from './Navbar.module.scss';
import { Button } from '../../shared/Button/Button';
import { List } from './../../features/List/List';

export class Navbar extends Component {
    navData = [
        {
            text: 'Home',
            href: '#hero'
        },
        {
            text: 'About',
            href: '#about'
        },
        {
            text: 'Portfolio',
            href: '#portfolio'
        },
        {
            text: 'Services',
            href: '#services'
        },
        {
            text: 'Resume',
            href: '#resume'
        },
        {
            text: 'Client',
            href: '#client'
        },
        {
            text: 'Blog',
            href: '#blog'
        },
        {
            text: 'Contact',
            href: '#contact'
        },
    ]

    render() {
        return (
            <nav className={style.navbar}>
                <List data={this.navData} />
                <Button text='Download CV' variable="primary" />
            </nav>
        )
    }
}

export default Navbar