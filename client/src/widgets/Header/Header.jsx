import React, { useEffect, useState } from 'react'
import './Header.scss'

import Container from './../../shared/Container/Container';
import Hero from '../Hero/Hero'
import { SocialLink } from './../../features/SocialLink/SocialLink';
import { Navbar } from './../../features/Navbar/Navbar';

import { FaTelegramPlane, FaInstagram, FaVk } from "react-icons/fa";

function Header() {
    const [socialLink, setSocialLink] = useState(null)

    useEffect(() => {
        fetch('/api/socials')
            .then(response => response.json())
            .then(response => setSocialLink(response.socials))
            .catch(error => console.log(error))
    }, [])

    return (
        <header className='header'>
            <Container>
                <Navbar />
                <Hero />
            </Container>
            <div className="socials-box">
                <SocialLink 
                    href='instagram.com' 
                    socialText={socialLink?.instagram} 
                    icon={FaInstagram} 
                />
                <SocialLink 
                    href='telegram.org' 
                    socialText={socialLink?.telegram} 
                    icon={FaTelegramPlane } 
                />
                <SocialLink 
                    href='vk.com' 
                    socialText={socialLink?.vk} 
                    icon={FaVk} 
                />
            </div>
        </header>
    )
}

export default Header