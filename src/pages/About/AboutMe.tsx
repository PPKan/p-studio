import React from "react";
import "../../css/About/AboutMe.scss";

type Props = {};

export default function AboutMe({}: Props) {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <div className="about-me__container__name">
          <span>甘定中</span>
          <span>Peter Kan</span>
        </div>
        <picture className="about-me__container__image">
          <source srcSet="https://picsum.photos/400/500" />
          <img src="" alt="" />
        </picture>
      </div>
    </section>
  );
}
