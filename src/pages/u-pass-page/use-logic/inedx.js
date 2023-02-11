import React, { useEffect, useState } from "react";

const useLogic = () => {
  const uPassItems = [
    { title: "통합 ALL PACK=800강", select: true },
    { title: "고3 패스=270강", select: false },
    { title: "고2 패스=200강", select: true },
    { title: "고1 패스=200강", select: false },
  ];
  const [isUPassCheck, setIsUpassCheck] = useState([true, false, false, false]);
  console.log(isUPassCheck);
  const [initialArray, setInitialArray] = useState([true, false, false, false]);

  useEffect(() => {
    setIsUpassCheck(initialArray);
  }, [initialArray]);

  const selectUPassItem = (i) => {
    console.log("start");
    const initialization = [false, false, false, false];
    // console.log("1", initialization);
    initialization[i] = !initialization[i];
    // console.log("2", initialization);
    setInitialArray([...initialization]);
  };
  return {
    isUPassCheck,
    setIsUpassCheck,
    uPassItems,
    selectUPassItem,
  };
};

export default useLogic;
