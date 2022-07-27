import React from "react";
import AboutLearntCard from "./AboutLearntCard";
import { AboutLearntData } from "./AboutData";
import "../../css/About/AboutLearnt.scss"

type Props = {};

export default function AboutLearnt({}: Props) {
  return (
    <>
      <section className="about-box about-learnt">
        <h2 className="about-box__title about-learnt__title">經過</h2>
        <div className="about-box__content about-learnt__cardbox">
          {AboutLearntData.map((item) => {
            return (
              <AboutLearntCard
                title={item.title}
                text={item.text}
                image={item.image}
                key={item.__item}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}