
// Component of button for increasing values of left and right basket
const Button = (props) => {
  const { leftVal, setLeftVal, rightVal, setRightVal, direction, imageUrl, tit } = props;

  function changeValue() {
    if (direction === "left") {
      setLeftVal(leftVal - 1);
      setRightVal(rightVal + 1);

      if(leftVal===0){
        setLeftVal(0);
        setRightVal(rightVal)
      }
     
    }

    else if(direction==="right"){
      setRightVal(rightVal-1);
      setLeftVal(leftVal+1);
      if(rightVal===0){
        setRightVal(0);
        setLeftVal(leftVal);
      }
    }
  }

  return (
    <button style={{ cursor: 'pointer' }} onClick={changeValue}>
      <img src={imageUrl} alt='Button' style={{ height: '100px', width: '100px' }} title={tit} />
    </button>

  )
}

export default Button