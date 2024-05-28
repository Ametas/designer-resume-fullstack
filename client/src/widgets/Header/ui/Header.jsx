import React, { useEffect, useState } from 'react'
import './style.scss'

import Container from '@shared/Container/Container';
import { SocialLink } from '@features/SocialLink';
import { Navbar } from '@features/Navbar';
import { Hero } from '@widgets/Hero';

import { FaTelegramPlane, FaInstagram, FaVk } from "react-icons/fa";

export const Header = () => {
  const [headerProps, setHeaderProps] = useState(null)

  useEffect(() => {
    fetch('/api/header')
      .then(response => response.json())
      .then(response => setHeaderProps(response.header))
      .catch(error => console.log(error))
  }, [])

  return (
    <header id='header' className='header'>
      <Container>
        <Navbar />
        <Hero data={headerProps} />
      </Container>
      <div className="socials-box">
        <SocialLink 
          href='instagram.com' 
          socialText={headerProps?.socials.instagram} 
          icon={FaInstagram} 
        />
        <SocialLink 
          href='t.me'
          socialText={headerProps?.socials.telegram} 
          icon={FaTelegramPlane } 
        />
        <SocialLink 
          href='vk.com' 
          socialText={headerProps?.socials.vk} 
          icon={FaVk} 
        />
      </div>
    </header>
  )
}
