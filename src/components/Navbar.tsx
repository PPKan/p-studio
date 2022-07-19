import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <>
    <div>P. Studio</div>
    <ul>
      <li>關於</li>
      <li>作品</li>
      <li>服務</li>
      <li>消息</li>
      <li>聯絡</li>
    </ul>
    <ul>
      <li>ZH-TW</li>
      <li>EN</li>
      <li>JP</li>
    </ul>
    </>
  )
}