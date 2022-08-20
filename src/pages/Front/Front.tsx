import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../css/Front/Front.scss";
import FrontServices from "./FrontServices";
import FrontShow from "./FrontShow";
import FrontWorks from "./FrontWorks";
import FrontInformation from "./FrontInformation";
import bgicon from "../../images/bg-icon.svg";
import FrontContact from "./FrontContact";
import { useTranslation } from "react-i18next";

type Props = {};

export default function Front({}: Props) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar />
      <h1 onClick={() => i18n.changeLanguage()}>{t("Welcome to React")}</h1>
      <FrontShow />
      <div className="spacer--16h">
        <img className="spacer__background--left" src={bgicon} alt="" />
      </div>
      <FrontServices />
      <div className="spacer--16h">
        <img className="spacer__background--right" src={bgicon} alt="" />
      </div>

      <FrontWorks />
      <div className="spacer--16h">
        <img className="spacer__background--left" src={bgicon} alt="" />
      </div>

      <FrontInformation />
      <div className="spacer--16h">
        <img className="spacer__background--right" src={bgicon} alt="" />
      </div>
      <FrontContact />
      <div className="spacer--16h">
        <img className="spacer__background--left" src={bgicon} alt="" />
      </div>
      <Footer />
    </>
  );
}
