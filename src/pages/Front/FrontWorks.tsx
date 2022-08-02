import React from 'react'
import WorksWebSlider from '../Works/WorksWebSlider'

import "../../css/Front/FrontWorks.scss"
import WorksTransSlider from '../Works/WorksTransSlider'

type Props = {}

export default function FrontWorks({}: Props) {
  return (
    <section className='front__box'>
      <h2 className='front__box__main-title'>作品</h2>
      <p className='front__box__sub-title'></p>
      {/* <WorksWebSlider /> */}
      <WorksTransSlider />
    </section>
  )
}