import React from "react";
import "../../css/Contact/ContactForm.scss";
import "../../css/ShadowCard.scss";

type Props = {};

export default function ContactForm({}: Props) {
  return (
    <section className="contact-form">
      <form className="contact-form__box shadow-card shadow-card--52h">
        <div className="contact-form__box__content contact-form__box__content--two">
          <div className="contact-form__box__content__name">
            <div className="contact-form__box__content__title">姓</div>
            <input
              required={true}
              placeholder="王"
              className="contact-form__box__content__input contact-form__box__content__input--half"
            />
          </div>
          <div className="contact-form__box__content__name">
            <div className="contact-form__box__content__title">名</div>
            <input
              required={true}
              placeholder="大華"
              className="contact-form__box__content__input contact-form__box__content__input--half"
            />
          </div>
        </div>
        <div className="contact-form__box__content">
          <div className="contact-form__box__content__title">
            公司名稱 (可選)
          </div>
          <input
            placeholder="王大華食品"
            className="contact-form__box__content__input"
          />
        </div>
        <div className="contact-form__box__content">
          <div className="contact-form__box__content__title">電子郵件</div>
          <input
            required={true}
            type={"email"}
            placeholder="wdh@email.com"
            className="contact-form__box__content__input"
          />
        </div>
        <div className="contact-form__box__content">
          <div className="contact-form__box__content__title">
            手機號碼 (可選)
          </div>
          <input
            placeholder="0912345678"
            className="contact-form__box__content__input"
          />
        </div>
        <div className="contact-form__box__content">
          <div className="contact-form__box__content__title">聯絡事項</div>
          <textarea
            required={true}
            className="contact-form__box__content__textarea"
          />
        </div>
        <button type="submit" className="contact-form__box__submit">
          送出
        </button>
      </form>
    </section>
  );
}
