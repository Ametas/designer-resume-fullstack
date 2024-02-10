import React, { useEffect, useState } from 'react'
import style from './AboutContent.module.scss'
import { SectionTitle } from '../../shared/SectionTitle/SectionTitle';
import { Paragraph } from '../../shared/Paragraph/Paragraph';
import { Button } from '../../shared/Button/Button';
import MySpecs from '../../features/MySpecs/MySpecs';
import { Title } from '../../shared/Title/Title';

export function AboutContent() {
    const [aboutData, setAboutData] = useState(null)

    useEffect(() => {
        fetch('api/about')
            .then(response => response.json())
            .then(response => setAboutData(response))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className={style['about-content']}>
            <SectionTitle data='About Me' />
            <Title text={aboutData?.title} />
            <Paragraph text={aboutData?.paragraph} />
            <MySpecs />
            <Button href={aboutData?.btn.btnHref} text={aboutData?.btn.btnText} variable={'primary'} />
        </div>
    )
}

export default AboutContent