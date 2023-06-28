import React, { use, useContext, useEffect, useState } from "react";
import { CustomizerContext } from "../context/testContext";
import CheckComp from "../components/CheckComp";

export default function VideoCall() {
  const { setCheck, check } = useContext(CustomizerContext);
  // console.log(con);
  console.log(useContext(CustomizerContext));

  return (
    <div style={{ border: "1px solid red" }}>
      <button onClick={setCheck}>Check</button>
      <CheckComp />
    </div>
  );
}
