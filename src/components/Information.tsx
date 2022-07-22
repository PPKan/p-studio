import React from 'react'
import "../css/Information.scss"

type Props = {
  date: String,
  title: String
}

export default function Information({date, title}: Props) {
  return (
    <>
    <div className='information'>
        <p className='information__date'>{date}</p>
        <p className='information__title'>{title}</p>
    </div>
    </>
  )
}