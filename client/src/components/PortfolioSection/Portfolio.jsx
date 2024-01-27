import React, { Component } from 'react'
import './Portfolio.scss'

import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'
import Title from '../Title/Title'
import List from '../List/List'
import PortfolioPreview from '../PortfolioPreview/PortfolioPreview'

export class Portfolio extends Component {
    navData = [
        {
            text: 'All',
            href: '#portfolio-all'
        },
        {
            text: 'Mobile',
            href: '#portfolio-all'
        },
        {
            text: 'Website',
            href: '#portfolio-all'
        },
        {
            text: 'Animation',
            href: '#portfolio-all'
        },
        {
            text: 'Exclusive',
            href: '#portfolio-all'
        },
    ]

    render() {
        return (
           <section className='portfolio'>
                <Container>
                    <SectionTitle data="Portfolio" />
                    <Title text='Some Of My Creative Work' />
                    <List data={this.navData} />
                    <PortfolioPreview />
                </Container>
           </section>
        )
    }
}

export default Portfolio