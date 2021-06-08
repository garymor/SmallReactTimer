import React from "react";
//import { names } from "./names";
import "./styles.css";

let attr = {
  style: {
    fontSize: "28px",
    padding: "30px",
    borderBottomColor: "aquamarine",
    color: ""
  }
};

function tick_tock(props) {
  const timeLeft = { time: props.time.timer };
  let color = timeLeft.time < 12 ? "red" : "";
  //console.log(timeLeft.time,color)
  attr.style = { ...attr.style, color: color };
  return (
    <section>
      <div className="head">timer set to {props.time.timerImmutable} sec </div>
      <div id="timer" {...attr}>
        {" "}
        {timeLeft.time--}{" "}
      </div>
    </section>
  );
}

export default tick_tock;
