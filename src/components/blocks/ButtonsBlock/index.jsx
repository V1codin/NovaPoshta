import React, { useContext } from "react";
import Btn from "../../modules/Button";

import { AppContext } from "../../../system/Context";

export default function () {
  const { initFn, clearFn } = useContext(AppContext);

  return (
    <>
      <Btn className="init__btn" title="Пошук" onClick={initFn} />
      <Btn className="init__btn" title="Очистити історію" onClick={clearFn} />
    </>
  );
}
