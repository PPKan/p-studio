import React from "react";
import "../../css/ShadowCard.scss";
import "../../css/About/AboutLearnt.scss";

type Props = {
  title: string;
  text: string;
  image: string;
};

export default function AboutLearntCard({ title, text, image }: Props) {
  return (
    <div className="about-learnt-card shadow-card shadow-card--22w-33h">
      <div className="about-learnt-card__image-box">
        <img src={image} alt="" className="about-learnt-card__image" />
      </div>
      <div className="about-learnt-card__content">
        <h3 className="about-learnt-card__content__title">{title}</h3>
        <p className="about-learnt-card__content__text">{text}</p>
      </div>
    </div>
  );
}
