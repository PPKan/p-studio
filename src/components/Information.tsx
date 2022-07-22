import React from 'react'

type Props = {
  date: String,
  title: String
}

export default function Information({date, title}: Props) {
  return (
    <>
    <div className='information'>
      <div className='information__item'>
        <p className='information__item__date'>{date}</p>
        <p className='information__item__title'>{title}</p>
      </div>
    </div>
    </>
  )
}