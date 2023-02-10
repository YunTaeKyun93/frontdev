import React from "react";
import classNames from "classnames/bind";
import styles from "./u-pass.module.scss";
import UPassBannerBackgroundImg from "../../../../components/u-pass-banner-background";
import UPassItemImg from "./../../../../components/u-pass-item-img/index";
import { HiCheck } from "react-icons/hi";

const UPass = ({
  isUPassCheck,
  setIsUpassCheck,
  uPassItems,
  test,
  setTest,
  selectUPassItem,
}) => {
  const ss = classNames.bind(styles);
  return (
    <div className={ss("wrapper")}>
      <div className={ss("u-pass-container")}>
        <div className={ss("banner-background")}>
          <UPassBannerBackgroundImg
            style={{ width: "100vw", height: "647px" }}
          />
        </div>
        <div className={ss("u-pass-header")}>
          <div className={ss("title")}>
            <p>영어 반복습관, 실력향상 두가지 모두 만날 준비 되셨나요?</p>
          </div>
          <div className={ss("description")}>
            <h2>2022 유니버스반복 U패스</h2>
          </div>
        </div>
        <div className={ss("u-pass-contents")}>
          <div className={ss("u-pass-description")}>
            <div className={ss("u-pass-image-card")}>
              <div className={ss("image-card-title")}>
                <p>유니버스반복</p>
                <p className={ss("font-orange")}>U패스 고등</p>
              </div>
            </div>
            <div className={ss("u-pass-image-background")}>
              <UPassItemImg
                style={{
                  width: "244px",
                  height: "258px",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className={ss("description-list")}>
              <div className={ss("list-title")}>
                <div className={ss("u-pass-coupon")}>할인적용 패스</div>
                <div className={ss("u-pass-title")}>
                  <p>U패스 고등</p>
                </div>
              </div>
              <div className={ss("u-pass-benefit")}>
                <div className={ss("benefit-item")}>
                  <div className={ss("check-icon")}>
                    <HiCheck />
                  </div>
                  <p>AI 반복 솔루션 실행</p>
                </div>
                <div className={ss("benefit-item")}>
                  <div className={ss("check-icon")}>
                    <HiCheck />
                  </div>
                  <p>반복 마일리지 100% 적립</p>
                </div>
                <div className={ss("benefit-item")}>
                  <div className={ss("check-icon")}>
                    <HiCheck />
                  </div>
                  <p>MY 반복데이터</p>
                </div>
                <div className={ss("benefit-item")}>
                  <div className={ss("check-icon")}>
                    <HiCheck />
                  </div>
                  <p>마일리지 현금 환급</p>
                </div>
              </div>
            </div>
          </div>
          <div className={ss("u-pass-select-container")}>
            <div className={ss("best-label")}>BEST</div>
            <div className={ss("u-pass-list")}>
      
             {uPassItems.map((item, i) => (
                <div key={item.title} className={ss("u-pass-item")}>
                  <div
                    className={ss(
                      `${isUPassCheck[i] ? "check-icon" : "none-check"}`
                    )}
                    onClick={() => {
                      setIsUpassCheck(!isUPassCheck[i]);

                      // setIsUpassCheck(!isUPassCheck[i])
                      // console.log(isUPassCheck[i]);
                    }}
                  >
                    {isUPassCheck[i] ? <HiCheck /> : ""}
                  </div>
                  <p>{item.title}</p>
                </div>
              ))}
              {/* <div
                className={ss("u-pass-item")}
                onClick={() => setIsUpassCheck({ ...isUPassCheck })}
              >
                <div
                  className={ss(
                    `${isUPassCheck ? "check-icon" : "none-check"}`
                  )}
                >
                  {isUPassCheck ? <HiCheck /> : ""}
                </div>
                <p>통합 ALL PACK=800강</p>
              </div> */}
              {/* <div
                className={ss("u-pass-item")}
                onClick={() => setIsUpassCheck(!isUPassCheck)}
              >
                <div className={ss(`${isUPassCheck ? "check-icon" : "none-check"}`)}>
                  {isUPassCheck ?     <HiCheck /> : "" }
              
                </div>
                <p>고3패스=270강</p>
              </div>
              <div
                className={ss("u-pass-item")}
                onClick={() => setIsUpassCheck(!isUPassCheck)}
              >
                <div className={ss(`${isUPassCheck ? "check-icon" : "none-check"}`)}>
                  {isUPassCheck ?     <HiCheck /> : "" }
              
                </div>
                <p>고2 패스=800강</p>
              </div>
              <div
                className={ss("u-pass-item")}
                onClick={() => setIsUpassCheck(!isUPassCheck)}
              >
                <div className={ss(`${isUPassCheck ? "check-icon" : "none-check"}`)}>
                  {isUPassCheck ?     <HiCheck /> : "" }
              
                </div>
                <p>고1 패스=200강</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UPass;
