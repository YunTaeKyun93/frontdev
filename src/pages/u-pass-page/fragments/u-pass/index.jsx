import React from "react";
import classNames from "classnames/bind";
import styles from "./u-pass.module.scss";
import UPassBannerBackgroundImg from '../../../../components/u-pass-banner-background';

const UPass = () => {
  const ss = classNames.bind(styles);

  return (
    <div className={ss("wrapper")}>
      <div className={ss("u-pass-container")}>
        <div className={ss("u-pass-contents")}>
          <div className={ss("banner-background")}>
          <UPassBannerBackgroundImg style={{width:'100vw',height:'647px'}}/>
          </div>
          <div className={ss("u-pass-header")}>
            <div className={ss("title")}>
              <p>영어 반복습관, 실력향상 두가지 모두 만날 준비 되셨나요?</p>
            </div>
            <div className={ss("description")}>
              <h2>2022 유니버스반복 U패스</h2>
            </div>
          </div>
          <div className={ss("experience-contents")}></div>
        </div>
        <div className={ss("purchase-info")}></div>
      </div>
    </div>
  );
};

export default UPass;
