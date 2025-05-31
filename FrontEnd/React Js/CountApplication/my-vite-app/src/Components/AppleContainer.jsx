import Button from "./Button";
import LeftArrow from "../assets/left.png";
import RightArrow from "../assets/right.png";
import Basket from "./Basket";
import { useState } from "react";

const AppleContainer = function () {
  const [leftVal, setLeftVal] = useState(10);
  const [rightVal, setRightVal] = useState(0);

  // function leftclickHandler() {
  //   console.log("Left arrow");
  //   if (leftapples > 0) {
  //     rightApples++;
  //     leftapples--;
  //   }

  //   console.log(rightApples);
  //   console.log(leftapples);
  //   ReactDOM.createRoot(document.getElementById("root")).render(
  //     <App />
  //   );
  // }

  // function rightclickHandler() {
  //   console.log("Right arrow");

  //   rightApples--;
  //   leftapples++;

  //   console.log(rightApples);
  //   console.log(leftapples);
  //   ReactDOM.createRoot(document.getElementById("root")).render(
  //     <App />
  //   );
  // }

  return (
    <>
      <div
        className="AppleContainer"
        style={{
          marginInline: "6rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Basket val={1} count={leftVal} />

        <Button
          leftVal={leftVal}
          setLeftVal={setLeftVal}
          imageUrl={LeftArrow}
          direction="left"
          tit="left-arrow"
          rightVal={rightVal}
          setRightVal={setRightVal}
        />
        <Button
          leftVal={leftVal}
          setLeftVal={setLeftVal}
          rightVal={rightVal}
          setRightVal={setRightVal}
          imageUrl={RightArrow}
          direction="right"
          tit="rightt-arrow"
        />
        <Basket val={2} count={rightVal} />
      </div>
    </>
  );
};
export default AppleContainer;
