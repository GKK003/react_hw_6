import { useState } from "react";
import Oval from "../../__atoms/oval/oval";
import Star from "../../../assets/Star.png";
import TextDiv from "../../__molecules/text_div/textdiv";
import Pay from "../../../assets/pay.png";
import ThanksDiv from "../../__molecules/text_div/thankstxt";
import Backimg from "../../../assets/back.png";

function MainDiv() {
  const [div, setDiv] = useState("none");
  const [main, setMain] = useState("flex");
  const [num1, setNum1] = useState();

  return (
    <>
      <div
        className="main_div"
        style={{
          display: main,
        }}
      >
        <Oval img={Star} classname="oval_star" />
        <TextDiv />
        <div className="oval_nums_div">
          <Oval
            classname={`oval_num ${num1 == "1" ? "oval_num_selected" : ""}`}
            num="1"
            onClick={() => {
              setNum1("1");
            }}
          />
          <Oval
            classname={`oval_num ${num1 === "2" ? "oval_num_selected" : ""}`}
            num="2"
            onClick={() => {
              setNum1("2");
            }}
          />
          <Oval
            classname={`oval_num ${num1 === "3" ? "oval_num_selected" : ""}`}
            num="3"
            onClick={() => {
              setNum1("3");
            }}
          />
          <Oval
            classname={`oval_num ${num1 === "4" ? "oval_num_selected" : ""}`}
            num="4"
            onClick={() => {
              setNum1("4");
            }}
          />
          <Oval
            classname={`oval_num ${num1 === "5" ? "oval_num_selected" : ""}`}
            num="5"
            onClick={() => {
              setNum1("5");
            }}
          />
        </div>
        <button
          className="btn"
          onClick={() => {
            if (!num1) return;
            setDiv("flex");
            setMain("none");
          }}
        >
          SUBMIT
        </button>
      </div>

      <div
        className="main_div"
        style={{
          display: div,
          alignItems: "center",
        }}
      >
        <img className="pay_img" src={Pay} alt="pay" />
        <div className="review">
          <p className="review_p">You selected {num1} out of 5</p>
        </div>
        <ThanksDiv />
        <img
          className="back"
          src={Backimg}
          onClick={() => {
            setDiv("none");
            setMain("flex");
            setNum1("");
          }}
        />
      </div>
    </>
  );
}

export default MainDiv;
