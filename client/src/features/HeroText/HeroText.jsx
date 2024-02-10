import React, { useEffect, useState } from 'react'
import './HeroText.scss'
import Paragraph from '../../shared/Paragraph/Paragraph'
import { SupTitle } from './../../shared/SupTitle/SupTitle';
import { Title } from '../../shared/Title/Title';
import { Button } from './../../shared/Button/Button';

function HeroText() {
    const [heroData, setHeroData] = useState(null)

    useEffect(() => {
        fetch('/api/heroText')
            .then(response => response.json())
            .then(response => setHeroData(response))
            .catch(e => console.log(e))
    }, [])
    return (
        <div className="hero-text">
            <i className="round"></i>
            <SupTitle text={ heroData?.supTitle } />
            <Title text={ heroData?.title } />
            <Paragraph text={ heroData?.paragraph } />
            <div className='btns'>
                <Button text={ heroData?.btns[0].btnText } variable="primary" />
                <Button text={ heroData?.btns[1].btnText } variable="secondary" />
            </div>
        </div>
    )
  }

export default HeroText