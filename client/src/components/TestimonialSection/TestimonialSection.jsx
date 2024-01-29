import React, { useState, useEffect } from 'react'
import './TestimonialSection.scss'
import Container from './../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import Title from '../Title/Title';
import Testimonial from '../Testimonial/Testimonial';

function TestimonialSection() {
    const [testimonials, setTestimonials] = useState(null)

    useEffect(() => {
        fetch('api/testimonial')
            .then(response => response.json())
            .then(response => setTestimonials(response))
            .catch(error => console.log(error))
    }, [])

    return (
        <section className='testimonials'>
            <Container>
                <SectionTitle data='Testimonial'/>
                <Title text='What Our Client Say About Us'/>
                <div className="testimonial-box">
                    {testimonials?.map((item, i) => (
                        <Testimonial key={i}
                            author={item.author}
                            authorRole={item.authorRole}
                            text={item.text}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default TestimonialSection