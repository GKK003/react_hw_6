import Text from "../../__atoms/text/txt";

function TextDiv() {
  return (
    <>
      <div className="txt_div">
        <Text class="txt_h1" text="How did we do?" />
        <Text
          class="txt_p"
          text="Please let us know how we did with your support request. 
          All feedback is appreciated to help us improve our offering!"
        />
      </div>
    </>
  );
}

export default TextDiv;
