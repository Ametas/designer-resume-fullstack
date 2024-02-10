import React from 'react';
import Portfolio from './../widgets/Portfolio/Portfolio';
import Resume from './../widgets/Resume/Resume';
import { About } from './../widgets/About/About';
import Header from './../widgets/Header/Header';
import Services from './../widgets/Services/Services';
import Testimonial from './../widgets/Testimonial/Testimonial';


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
