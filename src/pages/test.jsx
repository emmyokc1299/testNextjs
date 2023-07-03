import React, { use, useContext, useEffect, useState } from "react";
// import { CustomizerContext } from "../context/testContext";
import {NewContext} from '../context/NewContext'
import CheckComp from "../components/CheckComp";

export default function VideoCall() {
  const { setCheck, check } = useContext(NewContext);
  // console.log(con);
  console.log(useContext(NewContext));

  return (
    <div style={{ border: "1px solid red" }}>
      <button onClick={setCheck}>Check</button>
      <CheckComp />
    </div>
  );
}
