import React from "react";
import Information from "../Info/Information";
import { info } from "../Info/InfoData";
import "../../css/Front/FrontInformation.scss";
import InfoList from "../Info/InfoList";

type Props = {};

export default function FrontInformation({}: Props) {
  return (
    <section className="front__box">
      <h2 className="front__box__main-title">消息</h2>
      <p className="front__box__sub-title">
        想知道關於我的最新資訊嗎？看這就對了！
      </p>
      <InfoList />
      <button className="front__info__button">看更多</button>
    </section>
  );
}
