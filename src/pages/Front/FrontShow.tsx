import React from 'react'
import sakuraMainJpg from "../../images/sakura-main-picture-border.jpg";
import sakuraMainPng from "../../images/sakura-main-picture-border.png";
import "../../css/Front/FrontShow.scss"
import { useTranslation } from 'react-i18next';

type Props = {}

export default function FrontShow({}: Props) {
  const { t, i18n } = useTranslation();
  return (
    <section className="front__show">
    <h1 className="front__show__main-title">{t("frontShowMainTitle")}</h1>
    <p className="front__show__sub-title">{t("frontShowSubTitle")}</p>
    <picture className="front__show__image">
      <source srcSet={sakuraMainPng}/>
      <img src={sakuraMainJpg}/>
    </picture>
  </section>
  )
}