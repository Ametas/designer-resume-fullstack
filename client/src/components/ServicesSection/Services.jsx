import React, { useState, useEffect } from 'react'
import './Services.scss'

import SectionTitle from '../SectionTitle/SectionTitle'
import Container from '../Container/Container'
import Title from '../Title/Title'
import Card from '../Card/Card'

import ComputerGraphic from '../../assets/images/pc-graphic.png'
import WebDesign from '../../assets/images/web-design.png'
import UiUx from '../../assets/images/uiux.png'
import WebDev from '../../assets/images/web-dev.png'

function Services() {
    const [cardData, setCardData] = useState(null)

    useEffect(() => {
        fetch('api/services')
            .then(response => response.json())
            .then(response => setCardData(response))
            .catch(error => console.log(error))
    }, [])

    return (
        <section className='services'>
            <Container>
                <SectionTitle data='Why Choose Us' />
                <Title text='Our Work Services' />
                <div className="cards">
                    {cardData?.map((item, i) => (
                        <Card key={i}
                            img={ComputerGraphic}
                            title={item.title}
                            text={item.text}
                            actionHref={item.actionHref}
                            actionText={item.actionText}
                        />
                    ))}

                    {/* <Card 
                        img = {ComputerGraphic}
                        title = 'Computer Graphic'
                        text = 'Conveniently and proacvenique and idene solutions easyuse enjoy collaboration...'
                        actionHref = '#'
                        actionText = 'Hire'
                    />
                    <Card 
                        img = {WebDesign}
                        title = 'Web Design'
                        text = 'Conveniently and proacvenique and idene solutions easyuse enjoy collaboration...'
                        actionHref = '#'
                        actionText = 'Hire'
                    />
                    <Card 
                        img = {UiUx}
                        title = 'UI/UX Design'
                        text = 'Conveniently and proacvenique and idene solutions easyuse enjoy collaboration...'
                        actionHref = '#'
                        actionText = 'Hire'
                    />
                    <Card 
                        img = {WebDev}
                        title = 'Web Development'
                        text = 'Conveniently and proacvenique and idene solutions easyuse enjoy collaboration...'
                        actionHref = '#'
                        actionText = 'Hire'
                    /> */}
                </div>
            </Container>
        </section>
    )
}

export default Services