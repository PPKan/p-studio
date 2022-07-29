import React from "react";
import Information from "./Information";
import { info } from "./InfoData";
import "../../css/Info/InfoList.scss";

type Props = {};

export default function InfoList({}: Props) {
  return (
    <div className="info-list">
      <div className="info-list__container">
        {info.map((item) => {
          return <Information {...item} key={item.date} />;
        })}
      </div>
    </div>
  );
}
