import React from "react";
import classNames from "classnames/bind";
import styles from "./benefit.module.scss";
import BenfitItem1Img from "./../../../../components/benefit-item1-img/index";
import BenfitItem2Img from './../../../../components/benefit-item2-img/index';
import BenfitItem3Img from './../../../../components/benefit-item3-img/index';
import BenfitItem4Img from './../../../../components/benefit-item4-img/index';

const Benefit = () => {

  const ss = classNames.bind(styles);
  return (
    <div className={ss("wrapper")}>
      <div className={ss("benefit-container")}>
        <div className={ss("benefit-header")}>
          <div className={ss("title")}>
            <p>영어 반복습관, 실력향상 두가지 모두 잡자!</p>
          </div>
          <div className={ss("description")}>
            <h2>
              <span className={ss("font-orange")}>U패스 혜택</span>을
              소개합니다!
            </h2>
          </div>
        </div>
        <div className={ss("benefit-contents")}>
          <div className={ss("item")}>
            <div className={ss("item-numbering")}>Point 1</div>
            <div className={ss("item-title")}>AI 반복 솔루션 실행</div>
            <BenfitItem1Img style={{ width: "117px", height: "90px" ,borderRadius:'4px'}} />
          </div>
          <div className={ss("item")}>
            <div className={ss("item-numbering")}>Point 2</div>
            <div className={ss("item-title")}>반복 마일리지 100% 적립</div>
            <BenfitItem2Img style={{ width: "117px", height: "90px" ,borderRadius:'4px'}} />
          </div>
          <div className={ss("item")}>
            <div className={ss("item-numbering")}>Point 3</div>
            <div className={ss("item-title")}>MY 반복데이터</div>
            <BenfitItem3Img style={{ width: "117px", height: "90px",borderRadius:'4px' }} />
          </div>
          <div className={ss("item")}>
      
            <div className={ss("item-numbering")}>Point 4</div>
            <div className={ss("item-title")}>마일리지 현금 환급</div>
            <BenfitItem4Img style={{ width: "117px", height: "90px",borderRadius:'4px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
