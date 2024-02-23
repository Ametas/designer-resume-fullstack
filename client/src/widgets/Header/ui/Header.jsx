import React, { useEffect, useState } from 'react'
import './style.scss'

import Container from '@shared/Container/Container';
import { SocialLink } from '@features/SocialLink';
import { Navbar } from '@features/Navbar';
import { Hero } from '@widgets/Hero';

import { FaTelegramPlane, FaInstagram, FaVk } from "react-icons/fa";

export const Header = () => {
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
