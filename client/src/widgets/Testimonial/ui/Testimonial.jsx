import React, { useState, useEffect } from 'react'
import './style.scss'
import Container from '@shared/Container/Container';
import { SectionTitle } from '@shared/SectionTitle'
import { Title } from '@shared/Title';
import { TestimonialItem } from '@features/TestimonialItem';

export const Testimonial = () => {
  const [testimonials, setTestimonials] = useState(null)

  useEffect(() => {
    fetch('api/testimonial')
      .then(response => response.json())
      .then(response => setTestimonials(response))
      .catch(error => console.log(error))
  }, [])

  return (
    <section id='testimonials' className='testimonials'>
      <Container>
        <SectionTitle>Testimonial</SectionTitle>
        <Title>What Our Client Say About Us</Title>
        <div className="testimonial-box">
          {testimonials?.map((item, i) => (
            <TestimonialItem key={i}
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
