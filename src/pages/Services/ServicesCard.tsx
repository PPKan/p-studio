import React from "react";
import "../../css/ShadowCard.scss";
import "../../css/Services/ServicesCard.scss";

type Props = {
  title: string;
  text: string;
  image: string;
};

export default function ServicesCard({ title, text, image }: Props) {
  return (
    <>
      <div className="services-card shadow-card--22h shadow-card">
        <div className="services-card__text-area">
          <div className="services-card__text-area__title">{title}</div>
          <div className="services-card__text-area__text">{text}</div>
        </div>
        <img src={image} alt="" />
      </div>
    </>
  );
}
