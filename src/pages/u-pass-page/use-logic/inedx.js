import React, { useEffect, useState } from "react";

const useLogic = () => {
  const uPassItems = [
    { title: "통합 ALL PACK=800강", select: true },
    { title: "고3 패스=270강", select: false },
    { title: "고2 패스=200강", select: true },
    { title: "고1 패스=200강", select: false },
  ];
  const [isUPassCheck, setIsUpassCheck] = useState([true, false, false, false]);
  const [test, setTest] = useState(true);
  let initialization = [false, false, false, false];

  // useEffect(()=>{
  //   console.log(isUPassCheck);
  // },[isUPassCheck])
  const selectUPassItem = (i) => {
    console.log("1", initialization);
    initialization[i] = !initialization[i];
    if (isUPassCheck[i] == true) {
      initialization[i] = !initialization[i];
    }
    console.log("2", initialization);
    setIsUpassCheck(...initialization);
    console.log(isUPassCheck);
  };
  return {
    isUPassCheck,
    setIsUpassCheck,
    uPassItems,
    test,
    setTest,
    selectUPassItem,
  };
};

export default useLogic;
