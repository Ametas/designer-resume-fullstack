import React from 'react'
import style from './style.module.scss';

import { Button } from '@shared/Button';
import { List } from '@features/List';

const navData = [
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

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <List data={navData} />
      <Button variable="primary">Download CV</Button>
    </nav>
  )
}
