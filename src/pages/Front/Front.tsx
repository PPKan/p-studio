import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../css/Front/Front.scss";
import FrontServices from "./FrontServices";
import FrontShow from "./FrontShow";
import FrontWorks from "./FrontWorks";
import FrontInformation from "./FrontInformation";
import bgicon from "../../images/bg-icon.svg";

type Props = {};

export default function Front({}: Props) {
  return (
    <>
      <Navbar />
      <div className="spacer--16h"></div>
      <FrontShow />
      <div className="spacer--16h">
      <img className="spacer__background--left" src={bgicon} alt=""/>
      </div>
      <FrontServices />
      <div className="spacer--16h">
      <img className="spacer__background--right" src={bgicon} alt=""/>
      </div>
      
      <FrontWorks />
      <div className="spacer--16h"></div>
      <FrontInformation />
      <div className="spacer--16h"></div>
      <Footer />
    </>
  );
}
