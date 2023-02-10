import React from "react";
import Navbar from "./../../components/nav-bar/index";
import Footer from "./../../components/footer/index";
import MainBanner from "./fragments/main-banner/index";
import classNames from "classnames/bind";
import styles from "./u-pass-page.module.scss";
import Recommendation from "./fragments/recommendation/index";
import Mileage from "./fragments/mileage/index";
import Benefit from "./fragments/benefit/index";
import Solution from "./fragments/solution/index";
import BigDataExperience from "./fragments/big-data-experience/index";
import RecurringSolutions from "./fragments/recurring-solutions/index";
import MileageScholarship from "./fragments/mileage-scholarship/index";
import Price from "./fragments/price/index";
import UPass from "./fragments/u-pass/index";
import useLogic from "./use-logic/inedx";

const UPassPage = () => {
  const logic = useLogic();

  const ss = classNames.bind(styles);
  return (
    <div className={ss("wrapper")}>
      <Navbar />
      <MainBanner />
      <Recommendation />
      <Mileage />
      <Benefit />
      <Solution />
      <BigDataExperience />
      <RecurringSolutions />
      <MileageScholarship />
      <Price />
      <UPass
      uPassItems={logic.uPassItems}
        isUPassCheck={logic.isUPassCheck}
        setIsUpassCheck={logic.setIsUpassCheck}
        test={logic.test} setTest={logic.setTest}
        selectUPassItem={logic.selectUPassItem}
      />
      <Footer />
    </div>
  );
};

export default UPassPage;
