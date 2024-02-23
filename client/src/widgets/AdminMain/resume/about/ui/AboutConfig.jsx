import React from 'react'
import style from './style.module.scss'

import { AdminTitle } from '@shared/titles/AdminTitle/ui/AdminTitle';
import { ConfigItem } from '@shared/admin/resume/ConfigItem';
import { SectionTitle } from '@shared/SectionTitle';
import { Title } from '@shared/Title';
import { Paragraph } from '@shared/Paragraph';
import { Button } from '@shared/Button';


export const AboutConfig = () => {

  return (
    <div className={style.about}>
      <AdminTitle>Обо мне</AdminTitle>
      <div className={style['about-content']}>
        <ConfigItem 
          placeholder={'Раздел'}
          component={SectionTitle}
        />
        <ConfigItem 
          placeholder={'Заголовок'}
          component={Title}
        />
        <ConfigItem 
          placeholder={'Параграф'}
          component={Paragraph}
        />
        <ConfigItem 
          placeholder={'Кнопка'}
          btnVariable={'primary'}
          component={Button}
        />
      </div>
    </div>
  )
}
