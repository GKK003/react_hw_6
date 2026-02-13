import { useState } from "react";
import "./App.css";
import Oval from "./components/__atoms/oval/oval";
import Star from "./assets/Star.png";
import TextDiv from "./components/__molecules/text_div/textdiv";
import OvalNum1 from "./components/__molecules/ovalnumber/ovalnumber";
import Btn from "./components/__atoms/btn/btn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main_div">
        <Oval img={Star} classname="oval_star" />
        <TextDiv />
        <OvalNum1 />
        <Btn />
      </div>
    </>
  );
}

export default App;
