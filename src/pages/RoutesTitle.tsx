import React from 'react'
import "../css/RoutesTitle.scss"

type Props = {}

export default function RoutesTitle({}: Props) {
  return (
    <section className='routes-title'>
        <h1 className='routes-title__title'>關於</h1>
        <p className='routes-title__text'>水清風靜  此人只在此處有</p>
    </section>
  )
}