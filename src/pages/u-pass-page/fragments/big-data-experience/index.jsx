import React from "react";
import classNames from "classnames/bind";
import styles from "./big-data-experience.module.scss";
import ExperienceImg from './../../../../components/experience-img/index';
const BigDataExperience = () => {
  const ss = classNames.bind(styles);

  return (
    <div className={ss("wrapper")}>
      <div className={ss("experience-container")}>
        <div className={ss("experience-header")}>
          <div className={ss("title")}>
            <p>단순히 반복에서만 끝나지 않습니다.</p>
          </div>
          <div className={ss("description")}>
            <h2>
              유니버스반복
              <span className={ss("font-orange")}> 빅데이터 체험</span>까지
            </h2>
          </div>
        </div>
        <div className={ss("experience-contents")}>
          <div className={ss("experience-banner")}>
            <ExperienceImg  style={{width:'782px',height:"392px"}}/>
          </div>
          <div className={ss("button")}>어휘, 문장 유형 별 내가 학습한 모든 데이터를 반복데이터에서 다시 학습 가능</div>
        </div>
      </div>
    </div>
  );
};

export default BigDataExperience;
