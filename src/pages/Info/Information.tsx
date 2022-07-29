import React from 'react'
import "../../css/Information.scss"

type Props = {
  date: string,
  title: string
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