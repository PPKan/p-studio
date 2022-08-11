import React from "react";
import Navbar from "../../components/Navbar";
import ServicesCards from "./ServicesCards";
import "../../css/spacer.scss";
import RoutesTitle from "../RoutesTitle";
import Footer from "../../components/Footer";

type Props = {};

export default function Services({}: Props) {
  return (
    <>
      <Navbar />
      <RoutesTitle title={"服務"} text={"風生水起  授劍予君斬蒼天"} />
      <div className="spacer--8h" />
      <ServicesCards />
      <div className="spacer--16h" />
      <Footer />
    </>
  );
}
