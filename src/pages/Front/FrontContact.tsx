import React from "react";
import "../../css/Front/FrontContact.scss";

type Props = {};

export default function FrontContact({}: Props) {
  return (
    <section className="front__contact">
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <div className="front__contact__container">
          <img className="front__contact__key" src="src/images/key-270.png" />
          <img className="front__contact__lock" src="src/images/lock.png" />
        </div>
      </a>
    </section>
  );
}
