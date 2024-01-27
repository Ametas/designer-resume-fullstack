import React, { Component } from 'react'
import './TestimonialSection.scss'
import Container from './../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import Title from '../Title/Title';
import Testimonial from '../Testimonial/Testimonial';

export class TestimonialSection extends Component {
    render() {
        return (
            <section className='testimonials'>
                <Container>
                    <SectionTitle data='Testimonial'/>
                    <Title text='What Our Client Say About Us'/>
                    <div className="testimonial-box">
                        <Testimonial />
                        <Testimonial />
                        <Testimonial />
                    </div>
                </Container>
            </section>
        )
    }
}

export default TestimonialSection