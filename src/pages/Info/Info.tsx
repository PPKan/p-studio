import React from "react";
import Information from "./Information";
import Navbar from "../../components/Navbar";
import "../../css/spacer.scss";
import RoutesTitle from "../RoutesTitle";
import InfoList from "./InfoList";
import Footer from "../../components/Footer";

type Props = {};

export default function Info({}: Props) {
  return (
    <>
      <Navbar />
      <RoutesTitle title={"消息"} text={"順風千里  萬界音字齊聚此"} />
      <div className="spacer--8h" />
      <InfoList />
      <div className="spacer--16h" />
      <Footer />
    </>
  );
}
