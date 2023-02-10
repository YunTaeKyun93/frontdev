import React from "react";
import classNames from "classnames/bind";
import styles from "./nav-bar.module.scss";
import logoSrc from "../../assets/images/logo.png";
import logoTextSrc from '../../assets/images/logo-text.png'
import logoImg from "./../logo-img/index";
import useNavBar from "./use-nav-bar";
const Navbar = () => {
  const ss = classNames.bind(styles);
   const {navigator} = useNavBar()
  return (
    <div className={ss("wrapper")}>
      <div className={ss("nav-head-container")}>
        <div className={ss("logo-container")} onClick={()=>navigator('/')} >
          <img src={logoSrc} alt="logo" className={ss('logo-img')} />
          <img src={logoTextSrc} alt="logoText" className={ss('logo-text') }/>
        </div>
        <div className={ss("user-service-container")}>
          <span>로그인</span>
          <span>회원가입</span>
        </div>
      </div>
      <div className={ss('border')}></div>
      <div className={ss("nav-menu-container")}>
        <div className={ss('menu-list')}>
            <span>반복PASS</span>
            <span>수강신청</span>
            <span>반복수강후기</span>
            <span>반복장학금</span>
            <span>유니버스반복 특징</span>
            <span>강사소개</span>
            <span>교재</span>
            <span>이벤트</span>
        </div>
        <div className={ss('button')}>반복 시작하기</div>
      </div>
    </div>
  );
};
export default Navbar;
