function Oval(props) {
  return (
    <>
      <div className={props.classname} onClick={props.onClick}>
        <img src={props.img} alt="" />
        <p>{props.num}</p>
      </div>
    </>
  );
}

export default Oval;
