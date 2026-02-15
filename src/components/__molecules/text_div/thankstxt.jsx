import Text from "../../__atoms/text/txt";

function ThanksDiv() {
  return (
    <>
      <div className="txt_div">
        <Text class="thanks_h1" text="Thank you!" />
        <Text
          class="thanks_p"
          text="We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
        />
      </div>
    </>
  );
}

export default ThanksDiv;
