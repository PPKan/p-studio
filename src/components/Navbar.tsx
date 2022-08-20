import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";

type Props = {};

export default function Navbar({}: Props) {
  const [navMenuList, setNavMenuList] = useState("navmenu__list");
  function handleNavmenu() {
    if (navMenuList === "navmenu__list navmenu__list--on")
      setNavMenuList("navmenu__list");
    else setNavMenuList("navmenu__list navmenu__list--on");
  }
  const { t, i18n } = useTranslation();

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
              {t("About")}
            </Link>
          </li>
          <li className="navbar__pages__items">
            <Link className="navbar__pages__items__move" to={"/works"}>
              {t("Works")}
            </Link>
          </li>
          <li className="navbar__pages__items">
            <Link className="navbar__pages__items__move" to={"/services"}>
            {t("Services")}
            </Link>
          </li>
          <li className="navbar__pages__items">
            <Link className="navbar__pages__items__move" to={"/info"}>
            {t("Info")}
            </Link>
          </li>
          <li className="navbar__pages__items">
            <Link className="navbar__pages__items__move" to={"/contact"}>
            {t("Contact")}
            </Link>
          </li>
        </ul>
        <ul className="navbar__languages">
          <li className="navbar__languages__items" onClick={() => i18n.changeLanguage("zh")}>ZH-TW</li>
          <li className="navbar__languages__items, navbar__languages__items--split">
            {" "}
            /{" "}
          </li>
          <li className="navbar__languages__items" onClick={() => i18n.changeLanguage("en")}>EN</li>
          <li className="navbar__languages__items, navbar__languages__items--split">
            {" "}
            /{" "}
          </li>
          <li className="navbar__languages__items">JP</li>
        </ul>
      </div>
      <div className="navmenu">
        <div className="navbar__icon navbar__icon--navmenu">
          <Link className="navbar__pages__items__move" to={"/"}>
            P. Studio
          </Link>
        </div>
        <span onClick={handleNavmenu}>
          <AiOutlineMenu className="navmenu__button" />
        </span>
        <div className={navMenuList}>
          <span onClick={handleNavmenu}>
            <IoMdClose className="navmenu__list__button" />
          </span>
          <li className="navmenu__list__list">
            <ul className="navmenu__list__list__item">
              <Link className="navbar__pages__items__move" to={"/about"}>
                關於 About
              </Link>
            </ul>
            <ul className="navmenu__list__list__item">
              <Link className="navbar__pages__items__move" to={"/works"}>
                作品 Works
              </Link>
            </ul>
            <ul className="navmenu__list__list__item">
              <Link className="navbar__pages__items__move" to={"/services"}>
                服務 Services
              </Link>
            </ul>
            <ul className="navmenu__list__list__item">
              <Link className="navbar__pages__items__move" to={"/info"}>
                消息 Info
              </Link>
            </ul>
            <ul className="navmenu__list__list__item">
              <Link className="navbar__pages__items__move" to={"/contact"}>
                聯絡 Contact
              </Link>
            </ul>
          </li>
        </div>
      </div>
      <div className="spacer--16h spacer--nav"></div>
    </>
  );
}
