import React from 'react'
import WorksWebSlider from '../Works/WorksWebSlider'

import "../../css/Front/FrontWorks.scss"

type Props = {}

export default function FrontWorks({}: Props) {
  return (
    <section className='front__box'>
      <h2 className='front__box__main-title'>作品</h2>
      <p className='front__box__sub-title'>這些初出茅廬的生澀作品中蘊藏了我對程式、設計的熱愛，作品頁面內有翻譯展示唷</p>
      <WorksWebSlider />
    </section>
  )
}