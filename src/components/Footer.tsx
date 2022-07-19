import React from "react";
import "../css/Footer.scss"

type Props = {};

export default function Footer({}: Props) {
  return (
    <>
      <div className="footer">
        <div className="footer__icon">P. Studio</div>
        <ul className="footer__pages">
          <li className="footer__pages__items">關於</li>
          <li className="footer__pages__items">作品</li>
          <li className="footer__pages__items">
            服務
            <ul className="footer__pages__items__sublist">
              <li>翻譯</li>
              <li>網頁設計</li>
              <li>全方位語言整合</li>
            </ul>
          </li>
          <li className="footer__pages__items">消息</li>
          <li className="footer__pages__items">聯絡</li>
        </ul>
      </div>
    </>
  );
}
