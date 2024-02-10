import React from 'react'
import style from './PortfolioPreview.module.scss'
import PreviewCard from '../../shared/PreviewCard/PreviewCard'

export function PortfolioPreview(props) {
    return (
        <ul className={style['portfolio-preview']}>
            <div className={style["preview-group"]}>
                <PreviewCard />
                <PreviewCard />
            </div>
            <div className={style["preview-group"]}>
                <PreviewCard />
                <PreviewCard />
            </div>
            <div className={style["preview-group"]}>
                <PreviewCard />
                <PreviewCard />
            </div>
        </ul>
    )
}

export default PortfolioPreview