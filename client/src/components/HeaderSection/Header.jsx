import React, { Component } from 'react'
import './Header.scss'

import Container from '../Container/Container'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import { SocialLink } from './../SocialLink/SocialLink';

import { FaInstagram, FaTelegramPlane , FaVk } from "react-icons/fa";

export class Header extends Component {
    render() {
        return (
            <header className='header'>
                <Container>
                    <Navbar />
                    <Hero />
                </Container>
                <div className="socials-box">
                    <SocialLink socialText="@inst" icon={FaInstagram} />
                    <SocialLink socialText="@tg" icon={FaTelegramPlane } />
                    <SocialLink socialText="@vk" icon={FaVk} />
                </div>
            </header>
        )
    }
}

export default Header