import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.scss";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <>
      <div className="navbar">
        <div className="navbar__icon">
          <Link className="navbar__pages__items__move" to={"/"}>
            P. Studio
          </Link>
        </div>
        <ul className="navbar__pages">
          <li className="navbar__pages__items">
            <Link className="navbar__pages__items__move" to={"/about"}>
              關於
            </Link>
          </li>
          <li className="navbar__pages__items">
            <Link className="navbar__pages__items__move" to={"/works"}>
              作品
            </Link>
          </li>
          <li className="navbar__pages__items">
            <Link className="navbar__pages__items__move" to={"/services"}>
              服務
            </Link>
          </li>
          <li className="navbar__pages__items">
            <Link className="navbar__pages__items__move" to={"/info"}>
              消息
            </Link>
          </li>
          <li className="navbar__pages__items">
            <Link className="navbar__pages__items__move" to={"/contact"}>
              聯絡
            </Link>
          </li>
        </ul>
        <ul className="navbar__languages">
          <li className="navbar__languages__items">ZH-TW</li>
          <li className="navbar__languages__items, navbar__languages__items--split">
            {" "}
            /{" "}
          </li>
          <li className="navbar__languages__items">EN</li>
          <li className="navbar__languages__items, navbar__languages__items--split">
            {" "}
            /{" "}
          </li>
          <li className="navbar__languages__items">JP</li>
        </ul>
      </div>
    </>
  );
}
