import React from 'react'
import style from './style.module.scss'

import { PreviewCard } from '@shared/PreviewCard'

export const PortfolioPreview = (props) => {
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
