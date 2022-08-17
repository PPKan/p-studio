import React from 'react'
import sakuraMainJpg from "../../images/sakura-main-picture-border.jpg";
import sakuraMainPng from "../../images/sakura-main-picture-border.png";
import "../../css/Front/FrontShow.scss"

type Props = {}

export default function FrontShow({}: Props) {
  return (
    <section className="front__show">
    <h1 className="front__show__main-title">LANGUAGE WITH ART</h1>
    <p className="front__show__sub-title">讓言語找到對象</p>
    <picture className="front__show__image">
      <source srcSet={sakuraMainPng}/>
      <img src={sakuraMainJpg}/>
    </picture>
  </section>
  )
}