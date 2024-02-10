import React, { Component } from 'react'
import style from './Tab.module.scss'

function Tab(props) {
    return (
        <a 
        href={props.href || '#'} 
        className={`${style.tab} ${props.isActive && style.active}`}>
            {props.text || 'Tab'}
        </a>
    )
}

export default Tab