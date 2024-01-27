import React, { Component } from 'react'
import './PortfolioPreview.scss'
import PreviewCard from './PreviewCard/PreviewCard'

export class PortfolioPreview extends Component {
    render() {
        return (
            <ul className='portfolio-preview'>
                <div className="preview-group">
                    <PreviewCard />
                    <PreviewCard />
                </div>
                <div className="preview-group">
                    <PreviewCard />
                    <PreviewCard />
                </div>
                <div className="preview-group">
                    <PreviewCard />
                    <PreviewCard />
                </div>
            </ul>
        )
    }
}

export default PortfolioPreview