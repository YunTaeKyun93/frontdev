import React from "react";
import Navbar from "./../../components/nav-bar/index";
import Footer from "./../../components/footer/index";
import MainBanner from "./fragments/main-banner/index";
import classNames from "classnames/bind";
import styles from "./u-pass-page.module.scss";
import Recommendation from './fragments/recommendation/index';
import Mileage from './fragments/mileage/index';
import Benefit from './fragments/benefit/index';
import Solution from './fragments/solution/index';
import BigDataExperience from './fragments/big-data-experience/index';
import RecurringSolutions from './fragments/recurring-solutions/index';
const UPassPage = () => {
  const ss = classNames.bind(styles);
  return (
    <div className={ss("wrapper")}>
     
        <Navbar />
        <MainBanner />
        <Recommendation/>
        <Mileage/>
        <Benefit/>
        <Solution/>
        <BigDataExperience/>
        <RecurringSolutions/>
        <Footer />
    
    </div>
  );
};

export default UPassPage;
