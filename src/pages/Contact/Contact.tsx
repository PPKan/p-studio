import React from "react";
import Navbar from "../../components/Navbar";
import ContactForm from "./ContactForm";
import "../../css/spacer.scss";
import RoutesTitle from "../RoutesTitle";
import Footer from "../../components/Footer";

type Props = {};

export default function Contact({}: Props) {
  return (
    <>
      <Navbar />
      <div className="spacer--16h" />
      <RoutesTitle title="聯絡" text="一紙隨風  要望心意一瞬達" />
      <div className="spacer--8h"></div>
      <ContactForm />
      <div className="spacer--16h"></div>
      <Footer />
    </>
  );
}
