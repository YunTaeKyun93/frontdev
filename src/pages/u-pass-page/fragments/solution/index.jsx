import React from "react";
import classNames from "classnames/bind";
import styles from "./solution.module.scss";

const Solution = () => {
  const ss = classNames.bind(styles);
  return (
    <div className={ss("wrapper")}>
      <div className={ss("solution-container")}>
        <div className={ss("solution-header")}>
          <div className={ss("title")}>
            <p>유니버스반복 영어 반복학습 솔루션</p>
          </div>
          <div className={ss("description")}>
            <h2>
              U패스가
              <span className={ss("font-orange")}> 정답인 이유</span>
            </h2>
          </div>
        </div>
        <div className={ss("solution-contents")}>
          <div className={ss("item-column")}>
            <div className={ss("item")}>
              <div className={ss("item-numbering")}>1</div>
              <div className={ss("item-title")}>
                <span>실제 출제된 최신 문제유형</span>
              </div>
              <div className={ss("item-description")}>
                <p>최신 출제 문제들과 모의고사 기출 문제들로 실전에 바로</p>
                <p>적용할 수 있도록 구성되어있습니다.</p>
              </div>
            </div>
            <div className={ss("item")}>
              <div className={ss("item-numbering")}>1</div>
              <div className={ss("item-title")}>
                <span>세분화된 구성</span>
              </div>
              <div className={ss("item-description")}>
                <p>빈칸, 구조, 어휘, 해석, 문법 등으로 다양하게 구성된</p>
                <p>영역들을 반복 학습할 수 있습니다.</p>
              </div>
            </div>
          </div>
          <div className={ss("item-column")}>
            <div className={ss("item")}>
              <div className={ss("item-numbering")}>1</div>
              <div className={ss("item-title")}>
                <span>다양한 자료 활용</span>
              </div>
              <div className={ss("item-description")}>
                <p>
                  일방적 강의와 다르게 원하는 단어/구/문장을 클릭하여 반복하고
                </p>
                <p>출제문제와 이미지 학습자료를 동시에 확인할 수 있습니다.</p>
              </div>
            </div>
            <div className={ss("item")}>
              <div className={ss("item-numbering")}>1</div>
              <div className={ss("item-title")}>
                <span>문장 암기법</span>
              </div>
              <div className={ss("item-description")}>
                <p>
                  단순 단어 암기뿐만 아니라 ‘문장’과 이미지에 연결고리를 부여한
                </p>
                <p>연상학습법을 통해 암기의 어려움을 극복할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
