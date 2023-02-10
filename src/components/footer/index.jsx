import React from "react";
import classNames from "classnames/bind";
import styles from "./footer.module.scss";

import FooterLogoImg from "./../footer-logo-img/index";
const Footer = () => {
  const ss = classNames.bind(styles);
  return (
    <div className={ss("wrapper")}>
      <div className={ss("footer-contaienr")}>
        <FooterLogoImg
          clasName={ss("logo")}
          style={{ width: "233px", height: "38px" }}
        />
        <div className={ss("footer-menu")}>
          <span>제휴문의</span>
          <span>이용약관</span>
          <span>개인정보취급방침</span>
          <span>고객센터</span>
          <span>채용</span>
          <span>특허소개</span>
          <span>제보하기</span>
        </div>
        <div className={ss("company-info")}>
          <div className={ss("info1")}>
            <span>(주)유니버스반복</span>
            <span>서울특별시 강남구 테헤란로 146 현악빌딩 1</span>
            <span>대표자:박명재</span>
          </div>
          <div className={ss("info2")}>
            <span>사업자등록번호 : 123-12-12347</span>
            <span>통신판매번호 : 2014-서울서초-0345</span>
            <span>유니버스반복 고객센터 : 1544-1234</span>
          </div>
        </div>
        <div className={ss("copyright")}>
          <span>Copyright © 2022 Universe Banbok. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
