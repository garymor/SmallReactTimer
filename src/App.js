import React from "react";
import "./styles.css";

let  alarm = new Audio("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3") 


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
  play(timeLeft.time)
  console.log(timeLeft.time,color)
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

let play = (t) => {
  if( t < 1) alarm.play();
}


export default tick_tock;
