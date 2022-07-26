import React from "react";
import "../../css/ShadowCard.scss";
import "../../css/About/AboutExperiences.scss";

type Props = {
  title: string;
  text: string;
  image: string;
};

export default function AboutExperiencesCard({ title, text, image }: Props) {
  return (
    <div className="about-experiences-card shadow-card shadow-card--8h">
      <div className="about-experiences-card__image-box">
        <img src={image} alt="" className="about-experiences-card__image" />
      </div>
      <div className="about-experiences-card__content">
        <h3 className="about-experiences-card__content__title">{title}</h3>
        <p className="about-experiences-card__content__text">{text}</p>
      </div>
    </div>
  );
}
