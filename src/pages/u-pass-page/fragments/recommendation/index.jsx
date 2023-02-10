import React from "react";
import classNames from "classnames/bind";
import styles from "./recommendataion.module.scss";

import { HiCheck } from "react-icons/hi";
const Recommendation = () => {
  const ss = classNames.bind(styles);
  return (
    <div className={ss("wrapper")}>
      <div className={ss("recommendation-container")}>
        <div className={ss("header")}>
          <div className={ss("title")}>
            <h3>2022 유니버스반복 패스</h3>
          </div>
          <div className={ss("description")}>
            <p>
              이런분들께 <span className={ss("font-orange")}>U패스</span>를
              추천합니다.
            </p>
          </div>
        </div>
        <div className={ss("list")}>
          <div className={ss("list-item")}>
            <div className={ss("check-icon")}>
              <HiCheck />
            </div>
            <p>VOD 시청과 1타 학습 솔루션을 융합해 나만의 고득점 비법</p>
          </div>
          <div className={ss("list-item")}>
            <div className={ss("check-icon")}>
              <HiCheck />
            </div>
            <p>선생님의 적중 스킬이 내 모니터로 공유</p>
          </div>
          <div className={ss("list-item")}>
            <div className={ss("check-icon")}>
              <HiCheck />
            </div>
            <p>자동 반복 시스템으로 매일 100 회독하기</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
