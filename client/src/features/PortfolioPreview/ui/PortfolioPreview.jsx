import React from 'react'
import style from './style.module.scss'

import { PreviewCard } from '@shared/PreviewCard'
import img from '@assets/images/designer-photos/7.png'

import apartmentContinent from '@assets/images/portfolio/apartmentContinent/1/1.jpg'
import apartmentOlymp from '@assets/images/portfolio/apartmentOlymp/1/1.jpg'
import apartmentUpgrade1 from '@assets/images/portfolio/apartmentUpgrade/1/1.jpg'
import apartmentUpgrade2 from '@assets/images/portfolio/apartmentUpgrade/2/1.jpg'
import countryDubrovskie from '@assets/images/portfolio/countryDubrovskie/1/1.jpg'
import privatehouseBogoslovka from '@assets/images/portfolio/privatehouseBogoslovka/1/1.jpg'

export const PortfolioPreview = (props) => {
  return (
    <ul className={style['portfolio-preview']}>
      <div className={style["preview-group"]}>
        <PreviewCard img={apartmentContinent} />
        <PreviewCard img={apartmentOlymp} />
      </div>
      <div className={style["preview-group"]}>
        <PreviewCard img={apartmentUpgrade1} />
        <PreviewCard img={apartmentUpgrade2} />
      </div>
      <div className={style["preview-group"]}>
        <PreviewCard img={countryDubrovskie} />
        <PreviewCard img={privatehouseBogoslovka} />
      </div>
    </ul>
  )
}
