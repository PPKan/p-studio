import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../css/Front/Front.scss";
import FrontServices from "./FrontServices";
import FrontShow from './FrontShow';
import FrontWorks from './FrontWorks';
import Information from "../../components/Information";

type Props = {};

export default function Front({}: Props) {
  return (
    <>
    <Information />
    </>
  );
}
