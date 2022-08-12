import React from "react";
import { Link, Navigate } from "react-router-dom";
import "../../css/Front/FrontContact.scss";
import fcKey from "../../images/key-270.png";
type Props = {};

export default function FrontContact({}: Props) {

  return (
    <section className="front__contact">
      <Link to="./contact">
        <div className="front__contact__container">
          <img className="front__contact__key--key" src={fcKey} />
        </div>
      </Link>
    </section>
  );
}
