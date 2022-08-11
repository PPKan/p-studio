import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import "../../css/Contact/ContactInfo.scss";

type Props = {};

export default function ContactInfo({}: Props) {
  return (
    <section className="contact-info">
      <a href="mailto:petervsjim@gmail.com">
        <div className="contact-info__item">
          <MdOutlineEmail />
          <span>petervsjim@gmail.com</span>
        </div>
      </a>
      <a
        href="https://www.facebook.com/pplearningnote"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="contact-info__item">
          <BsFacebook />
          <span>pplearningnote</span>
        </div>
      </a>
    </section>
  );
}
