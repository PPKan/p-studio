import React from 'react'
import "../css/RoutesTitle.scss"

type Props = {
  title: string,
  text: string
}

export default function RoutesTitle({title, text}: Props) {
  return (
    <section className='routes-title'>
        <h1 className='routes-title__title'>{title}</h1>
        <p className='routes-title__text'>{text}</p>
    </section>
  )
}