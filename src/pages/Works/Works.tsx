import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import RoutesTitle from "../RoutesTitle";
import WorksTransSlider from "./WorksTransSlider";
import WorksWebSlider from "./WorksWebSlider";

type Props = {};

export default function Works({}: Props) {
  return (
    <>
      {/* <Navbar /> */}
      {/* <RoutesTitle title={"作品"} text={"風兮水兮  往事回首如畫"} /> */}
      {/* <WorksWebSlider/> */}
      <WorksTransSlider />
      {/* <Footer /> */}
    </>
  );
}
