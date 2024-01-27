import React, { Component } from 'react'
import './Navbar.scss';
import Button from '../Button/Button';
import List from '../List/List';

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
            <nav className='navbar'>
                <List data={this.navData} />
                {/* <ul className='navbar-list'>
                    <Link data='Home'/>
                    <Link data='About'/>
                    <Link data='Portfolio'/>
                    <Link data='Services'/>
                    <Link data='Resume'/>
                    <Link data='Client'/>
                    <Link data='Blog'/>
                    <Link data='Contact'/>
                </ul> */}
                <Button text='Download CV' />
            </nav>
        )
    }
}

export default Navbar