import React from 'react'
import "../css/Navbar.scss"

type Props = {}

export default function Navbar({}: Props) {
  return (
    <>
    <div className='navbar'>
    <div className='navbar__icon'>P. Studio</div>
    <ul className='navbar__pages'>
      <li className='navbar__pages__items'>關於</li>
      <li className='navbar__pages__items'>作品</li>
      <li className='navbar__pages__items'>服務</li>
      <li className='navbar__pages__items'>消息</li>
      <li className='navbar__pages__items'>聯絡</li>
    </ul>
    <ul className='navbar__languages'>
      <li className='navbar__languages__items'>ZH-TW</li>
      <li className="navbar__languages__items, navbar__languages__items--split"> / </li>
      <li className='navbar__languages__items'>EN</li>
      <li className="navbar__languages__items, navbar__languages__items--split"> / </li>
      <li className='navbar__languages__items'>JP</li>
    </ul>
    </div>
    </>
  )
}