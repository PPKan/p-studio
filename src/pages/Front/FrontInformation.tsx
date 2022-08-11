import React from "react";
import Information from "../Info/Information";
import { info } from "../Info/InfoData";
import "../../css/Front/FrontInformation.scss";
import InfoList from "../Info/InfoList";
import { Link } from "react-router-dom";

type Props = {};

export default function FrontInformation({}: Props) {
  return (
    <section className="front__box">
      <h2 className="front__box__main-title">消息</h2>
      <p className="front__box__sub-title">
        想知道關於我的最新資訊嗎？看這就對了！
      </p>
      <InfoList />
      <Link to="/info" className="link-style-none front__info__link">
        <button className="front__info__button">看更多</button>
      </Link>
    </section>
  );
}
