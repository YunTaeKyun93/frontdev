import React from "react";
import classNames from "classnames/bind";
import styles from "./mileage.module.scss";
import { HiChevronRight } from "react-icons/hi";
const Mileage = () => {
  const ss = classNames.bind(styles);
  return (
    <div className={ss("wrapper")}>
      <div className={ss("mileage-container")}>
        <div className={ss("mileage-header")}>
          <div className={ss("title")}>
            <p>U패스 수강신청 시 현금 마일리지 무조건 적립</p>
          </div>
          <div className={ss("description")}>
            <h2>
              수강신청하고{" "}
              <span className={ss("font-orange")}>현금 마일리지 받자</span>
            </h2>
          </div>
        </div>
        <div className={ss("mileage-contents")}>
          <div className={ss("mileage-item")}>
            <div className={ss("item-numbering")}>1</div>
            <p>
              <span className={ss("font-purple")}> U패스</span> 수강신청
            </p>
          </div>
          <HiChevronRight className={ss("right-arrow")} />
          <div className={ss("mileage-item")}>
          <div className={ss("item-numbering")}>2</div>
            <p>
              <span className={ss("font-purple")}>현금</span> 마일리지 적립
            </p>
          </div>
          <HiChevronRight className={ss("right-arrow")} />
          <div className={ss("mileage-item")}>
          <div className={ss("item-numbering")}>3</div>
           
              <p className={ss("font-purple")}>현금 출금</p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mileage;
