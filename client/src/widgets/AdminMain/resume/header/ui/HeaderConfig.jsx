import React from 'react'
import style from './style.module.scss'
import { AdminTitle } from '@shared/titles/AdminTitle';
import { SupTitle } from '@shared/SupTitle';
import { Button } from '@shared/Button';
import { Title } from '@shared/Title';
import { ConfigItem } from '@shared/admin/resume/ConfigItem';
import { Paragraph } from '@shared/Paragraph';

export const HeaderConfig = () => {

  return (
    <div className={style.header}>
      <AdminTitle>Главная</AdminTitle>
      <div className={style['header-content']}>
        <ConfigItem 
          placeholder={'Надзаголовок'} 
          component={SupTitle} 
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
          placeholder={'@Вконтакте'} 
          component={Paragraph} 
        />
        <ConfigItem 
          placeholder={'@Телеграм'} 
          component={Paragraph} 
        />
        <ConfigItem 
          placeholder={'@Инстаграм'} 
          component={Paragraph} 
        />
        <ConfigItem 
          placeholder={'Кнопка 1'} 
          component={Button}
          btnVariable={'primary'}
        />
        <ConfigItem 
          placeholder={'Кнопка 3'} 
          component={Button}
          btnVariable={'primary'}
        />
        <ConfigItem 
          placeholder={'Кпнока 2'} 
          component={Button}
          btnVariable={'secondary'}
          dark
        />
      </div>
    </div>
  )
}
