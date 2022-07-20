import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../css/Front/Front.scss";
import FrontServices from "./FrontServices";
import FrontShow from './FrontShow';

type Props = {};

export default function Front({}: Props) {
  return (
    <>
      <FrontServices/>
    </>
  );
}
