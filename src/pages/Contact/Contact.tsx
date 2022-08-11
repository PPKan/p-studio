import React from "react";
import Navbar from "../../components/Navbar";
import ContactForm from "./ContactForm";
import "../../css/spacer.scss";
import RoutesTitle from "../RoutesTitle";
import Footer from "../../components/Footer";
import ContactInfo from "./ContactInfo";
import "../../css/Contact/Contact.scss";

type Props = {};

export default function Contact({}: Props) {
  return (
    <>
      <Navbar />
      <RoutesTitle title="聯絡" text="一紙隨風  要望心意一瞬達" />
      <div className="spacer--8h"></div>
      <section className="contact">
        <div className="contact__box">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <div className="spacer--16h"></div>
      <Footer />
    </>
  );
}
