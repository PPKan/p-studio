import React from "react";
import { Link, Navigate } from "react-router-dom";
import "../../css/Front/FrontContact.scss";

type Props = {};

export default function FrontContact({}: Props) {

  return (
    <section className="front__contact">
      <Link to="./contact">
        <div className="front__contact__container">
          <img className="front__contact__key" src="src/images/key-270.png" />
          <img className="front__contact__lock" src="src/images/lock.png" />
        </div>
      </Link>
    </section>
  );
}
