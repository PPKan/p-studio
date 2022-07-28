import React from "react";
import ServicesCard from "./ServicesCard";
import "../../css/Services/ServicesCards.scss";
import { ServicesData } from "./ServicesData";

type Props = {};

const data = ServicesData;

export default function ServicesCards({}: Props) {
  return (
    <section className="services-cards">
      <div className="services-cards__cardbox">
        {data.map((item) => {
          return (
            <ServicesCard
              title={item.title}
              text={item.text}
              image={item.image}
            />
          );
        })}
      </div>
    </section>
  );
}
