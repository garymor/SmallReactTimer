import ReactDOM from "react-dom";
//import names from "./names";
import Clock from "./App";

const rootElement = document.getElementById("root");

const time = {
  timerImmutable: 10,
  timer: 10
};

function init() {
  ReactDOM.render(
    <>
      <Clock time={time} />
    </>,

    rootElement
  );
}



let timeout = () => {
  if (time.timer > 0) {
    init(time.timer--);
  } else clearInterval(myInterval);
};


timeout()

 let myInterval = setInterval(() => {
  timeout();
 }, 1000);
