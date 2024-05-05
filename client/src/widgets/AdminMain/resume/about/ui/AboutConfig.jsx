import React, { useEffect, useState } from 'react'
import style from './style.module.scss'

import { AdminTitle } from '@shared/titles/AdminTitle/ui/AdminTitle';
import { ConfigItem } from '@shared/admin/resume/ConfigItem';
import { Title } from '@shared/Title';
import { Paragraph } from '@shared/Paragraph';
import { Button } from '@shared/Button';

import _ from 'lodash'

export const AboutConfig = () => {
  const [config, setConfig] = useState(null)

  useEffect(() => {
    fetch('/api/about')
      .then(res => res.json())
      .then(res => setConfig(res))
  }, [])

  const handleConfigChange = (key, value) => {
    setConfig(prevConfig => _.set({ ...prevConfig }, key, value))
  }

  if(!config) {
    return 'Loading...'
  }

  return (
    <div className={style.about}>
      <AdminTitle>Обо мне</AdminTitle>
      <div className={style['about-content']}>
        {console.log(config)}
        <ConfigItem 
          placeholder={'Заголовок'}
          component={Title}
          initialValue={config?.title}
          onChange={(value) => handleConfigChange('title', value)}
          keys={{ section: 'about', key: 'title' }}
        />
        <ConfigItem 
          placeholder={'Параграф'}
          component={Paragraph}
          initialValue={config?.paragraph}
          onChange={(value) => handleConfigChange('paragraph', value)}
          keys={{ section: 'about', key: 'paragraph' }}
        />
        <ConfigItem 
          placeholder={'Кнопка'}
          btnVariable={'primary'}
          component={Button}
          initialValue={config.btn.btnText}
          keys={{ section: 'about', key: 'btn.btnText' }}
          onChange={(value) => handleConfigChange('btn.btnText', value)}
        />
      </div>
    </div>
  )
}
