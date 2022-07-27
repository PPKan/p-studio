import React from "react";
import AboutExperiencesCard from "./AboutExperiencesCard";
import { AboutExperienceData } from "./AboutData";
import "../../css/About/AboutExperiences.scss"

type Props = {};

export default function AboutExperiences({}: Props) {
  return (
    <>
      <section className="about-box about-experiences">
        <h2 className="about-box__title about-experiences__title">經過</h2>
        <div className="about-box__content about-experiences__cardbox">
          {AboutExperienceData.map((item) => {
            return (
              <AboutExperiencesCard
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