import React, { useState, useEffect } from 'react'
import './Testimonial.scss'
import Container from '../../shared/Container/Container';
import SectionTitle from '../../shared/SectionTitle/SectionTitle'
import { Title } from '../../shared/Title/Title';
import { Testimonial } from '../../features/Testimonial/Testimonial';

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