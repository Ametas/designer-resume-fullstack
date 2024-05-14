import React from 'react'
import style from './style.module.scss';

import { Button } from '@shared/Button';
import { List } from '@features/List';

const navData = [
    {
        text: 'Главная',
        href: '/#hero'
    },
    {
        text: 'Обо мне',
        href: '/#about'
    },
    {
        text: 'Портфолио',
        href: '/#portfolio'
    },
    {
        text: 'Сферы услуг',
        href: '/#services'
    },
    {
        text: 'Резюме',
        href: '/#resume'
    },
    {
        text: 'Отзывы',
        href: '/#testimonials'
    },
]

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <List data={navData} />
      <Button variable="primary">Заказать</Button>
    </nav>
  )
}
