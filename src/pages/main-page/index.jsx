import React from "react";
import Navbar from "./../../components/nav-bar/index";
import useLogic from "./use-logic/index";
import Footer from './../../components/footer/index';


const MainPage = () => {
  const logic = useLogic();
  return (
    <div>
      <Navbar  />
      메인페이지 디자인 없음
      <button onClick={() => logic.navigator("/u-pass")}>반복 U 패스</button>
      <button onClick={() => logic.navigator("/zero-pass")}>0원 패스</button>
      <Footer/>
    </div>
  );
};

export default MainPage;
