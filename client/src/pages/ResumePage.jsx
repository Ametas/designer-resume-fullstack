import React from 'react';
import Header from '../components/HeaderSection/Header';
import About from '../components/AboutSection/About';
import Portfolio from '../components/PortfolioSection/Portfolio';
import Services from '../components/ServicesSection/Services';
import Resume from '../components/ResumeSection/ResumeSection';
import Testimonial from '../components/TestimonialSection/TestimonialSection';

function ResumePage() {
    return (
        <>
            <Header />
            <About />
            <Portfolio />
            <Services />
            <Resume />
            <Testimonial />
        </>
    )
}

export default ResumePage
