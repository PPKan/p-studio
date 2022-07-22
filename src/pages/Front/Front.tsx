import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../css/Front/Front.scss";
import FrontServices from "./FrontServices";
import FrontShow from './FrontShow';
import FrontWorks from './FrontWorks';
import FrontInformation from './FrontInformation';

type Props = {};

export default function Front({}: Props) {
  return (
    <>
    <Navbar/>
    <div className="spacer--16h"></div>
    <FrontShow />
    <div className="spacer--16h"></div>
    <FrontServices />
    <div className="spacer--16h"></div>
    <FrontWorks />
    <div className="spacer--16h"></div>
    <FrontInformation />
    <div className="spacer--16h"></div>
    <Footer />
    </>
  );
}
