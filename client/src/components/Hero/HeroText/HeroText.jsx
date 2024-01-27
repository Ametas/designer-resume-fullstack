import React, { Component, useEffect, useState } from 'react'
import './HeroText.scss'
import Button from '../../Button/Button'
import Paragraph from '../../Paragraph/Paragraph'
import SupTitle from '../../SupTitle/SupTitle'
import Title from '../../Title/Title'

function HeroText() {
    const [heroData, setHeroData] = useState(null)

    useEffect(() => {
        fetch('/api/heroText')
            .then(response => response.json())
            .then(response => setHeroData(response.header))
            .catch(e => console.log(e))
    }, [])
    return (
        <div className="hero-text">
            <i className="round"></i>
            <SupTitle text={ heroData?.supTitle } />
            <Title text={ heroData?.title } />
            <Paragraph text={ heroData?.paragraph } />
            <div className='btns'>
                <Button text={ heroData?.btns[0].btnText } />
                <Button text={ heroData?.btns[1].btnText } variable="secondary" />
            </div>
        </div>
    )
  }

export default HeroText