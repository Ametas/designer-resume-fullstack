import React, { useEffect, useState } from 'react'
import './AboutContent.scss'

import SectionTitle from '../../SectionTitle/SectionTitle'
import Title from '../../Title/Title'
import Paragraph from '../../Paragraph/Paragraph'
import MySpecs from '../MySpecs/MySpecs'
import Button from './../../Button/Button';

function AboutContent() {
    const [aboutData, setAboutData] = useState(null)

    useEffect(() => {
        fetch('api/about')
            .then(response => response.json())
            .then(response => setAboutData(response))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='about-content'>
            <SectionTitle data='About Me' />
            <Title text={aboutData?.title} />
            <Paragraph text={aboutData?.paragraph} />
            <MySpecs />
            <Button href={aboutData?.btn.btnHref} text={aboutData?.btn.btnText} />
        </div>
    )
}

export default AboutContent