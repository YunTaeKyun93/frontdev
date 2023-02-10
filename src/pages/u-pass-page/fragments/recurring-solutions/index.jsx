import React from "react";
import classNames from "classnames/bind";
import styles from "./recurring-solutions.module.scss";
import RecuuringSolutionsImg1 from "./../../../../components/recurring-solutions1-img/index";
import RecuuringSolutionsImg2 from "./../../../../components/recurring-solutions2-img/index";
import RecuuringSolutionsImg3 from "./../../../../components/recurring-solutions3-img/index";

const RecurringSolutions = () => {
  const ss = classNames.bind(styles);

  return (
    <div className={ss("wrapper")}>
      <div className={ss("recurring-solutions-container")}>
        <div className={ss("recurring-solutions-header")}>
          <div className={ss("title")}>
            <p>U패스로 단기간 최대 효과를 끌어올리세요!</p>
          </div>
          <div className={ss("description")}>
            <h2>
              반복 솔루션
              <span className={ss("font-orange")}> 무료제공</span>까지
            </h2>
          </div>
        </div>
        <div className={ss("recurring-solutions-contents")}>
          <div className={ss("item-columns")}>
            <div className={ss("item")}>
              <div className={ss("item-numbering")}>01</div>
              <div className={ss("item-title")}>
                <p>원클릭 1등급 반복 학습</p>
              </div>
              <div className={ss("item-description")}>
                <p>1타 유명 교재 집필 방식 분석, 반복 솔루션에 적용함으로써</p>
                <p>
                  0원 패스, U패스 수강시 모든 학생들이 직접 1타가 되어 무한 반복
                  학습.
                </p>
              </div>
              <div className={ss("item-image")}>
                <RecuuringSolutionsImg1
                  style={{ width: " 580px", height: "303px" }}
                />
              </div>
            </div>
            <div className={ss("item")}>
              <div className={ss("item-numbering")}>02</div>
              <div className={ss("item-title")}>
                <p>
                  <span className={ss("font-orange")}>업계 최초 등급별</span>{" "}
                  인강 수강 방식 차별화
                </p>
              </div>
              <div className={ss("item-description")}>
                <p>등급별 꼭 필요한 강의 구간을 추천 함과 동시에</p>
                <p>
                  솔루션 화면에 인터넷 강의, 전자책, 반복 학습 3가지 화면을
                  동시에 제공
                </p>
              </div>
              <div className={ss("item-image")}>
                <RecuuringSolutionsImg2
                  style={{ width: " 580px", height: "303px" }}
                />
              </div>
            </div>
            <div className={ss("item")}>
              <div className={ss("item-numbering")}>03</div>
              <div className={ss("item-title")}>
                <p>AI 음성 기반 원클릭 반복 학습</p>
              </div>
              <div className={ss("item-description")}>
                <p>
                  1타 강사들의 비싼 강의에만 제공 되던 원어 MP3, 반복 수능 전
                  지문 자동 적용 제공 되는
                </p>
                <p>구문 분석에서 원하는 단어 /구문/문장 클릭 무한 반복</p>
              </div>
              <div className={ss("item-image")}>
                <div className={ss('img-blinder')}></div>
                <RecuuringSolutionsImg3
                  style={{ width: " 580px", height: "303px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecurringSolutions;
