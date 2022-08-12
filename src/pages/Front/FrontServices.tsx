import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "../../css/Front/FrontServices.scss";
import fsTranslationAPNG from "../../images/front/fs_translation.png";
import fsTranslationGIF from "../../images/front/fs_translation.gif";
import fsTranslationXGIF from "../../images/front/fs_translation_np.gif";
import fsWebdesignPNG from "../../images/front/fs_webdesign.png";
import fsWebdesignGIF from "../../images/front/fs_webdesign.gif";
import fsWebdesignXGIF from "../../images/front/fs_webdesign_np.gif";
import fsTypewriterAPNG from "../../images/front/fs_typewriter.png";
import fsTypewriterGIF from "../../images/front/fs_typewriter.gif";
import fsTypewriterXGIF from "../../images/front/fs_typewriter_np.gif";


type Props = {};

export default function FrontServices({}: Props) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [cards, setCards] = useState("front__services__cards");

  useEffect(() => {
    if (inView)
      setCards("front__services__cards front__services__cards--slide-in");
    else setCards("front__services__cards");
  }, [inView]);

  return (
    <section className="front__services front__box">
      <h2 className="front__services__main-title front__box__main-title">
        服務
      </h2>
      <p className="front__services__sub-title front__box__sub-title">
        讓語言、資訊、科技的多方位能力成為你的助力
      </p>
      <div className={cards} ref={ref}>
        <div className="front__services__cards__card shadow-card shadow-card--22w-33h">
          <picture className="front__services__cards__card__image">
            <source
              srcSet={fsTranslationAPNG}
              type="image/apng"
            ></source>
            <source
              srcSet={fsTranslationGIF}
              type="image/gif"
            ></source>
            <img src={fsTranslationXGIF} alt="" />
          </picture>
          <h3 className="front__services__cards__card__title">翻譯</h3>
          <p className="front__services__cards__card__text">
            透過翻譯技巧與對中、英、日三國語言的理解將您的文件翻譯到好，除了文件之外，網頁、遊戲也都可以為您服務
          </p>
        </div>
        <div className="front__services__cards__card shadow-card shadow-card--22w-33h">
          <picture className="front__services__cards__card__image">
            <source
              srcSet={fsWebdesignPNG}
              type="image/apng"
            ></source>
            <source
              srcSet={fsWebdesignGIF}
              type="image/gif"
            ></source>
            <img src={fsWebdesignXGIF} alt="" />
          </picture>
          <h3 className="front__services__cards__card__title">網頁設計</h3>
          <p className="front__services__cards__card__text">
            規劃、設計、程式一條龍，讓您舒服地完成網頁設計。豐富的商業溝通能力更是讓您能夠沒有壓力地談論關於您理想網頁的一切
          </p>
        </div>
        <div className="front__services__cards__card shadow-card shadow-card--22w-33h">
          <picture className="front__services__cards__card__image">
            <picture className="front__services__cards__card__image">
              <source
                srcSet={fsTypewriterAPNG}
                type="image/apng"
              ></source>
              <source
                srcSet={fsTypewriterXGIF}
                type="image/gif"
              ></source>
              <img src={fsTypewriterGIF} alt="" />
            </picture>
          </picture>
          <h3 className="front__services__cards__card__title">
            全方位語言整合
          </h3>
          <p className="front__services__cards__card__text">
            網頁、圖片想要多加幾種語言，卻要找翻譯社，又要找設計師，太辛苦了！這裡的整合服務，從網站到圖片、文字，全部幫你翻譯設計到好！
          </p>
        </div>
      </div>
    </section>
  );
}
