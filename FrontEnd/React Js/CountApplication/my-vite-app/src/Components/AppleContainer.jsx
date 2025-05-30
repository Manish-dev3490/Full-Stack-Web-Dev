import Button from "./Button";
import LeftArrow from "../assets/left.png";
import RightArrow from "../assets/right.png";
import Basket from "./Basket";
import ReactDOM from "react-dom/client";

const totalApples = 10;
let leftapples = totalApples - 0;
let rightApples = totalApples - leftapples;
const AppleContainer = function () {
  function leftclickHandler() {
    console.log("Left arrow");
    if (leftapples > 0) {
      rightApples++;
      leftapples--;
    }

    console.log(rightApples);
    console.log(leftapples);
    ReactDOM.createRoot(document.getElementById("root")).render(
      <AppleContainer />
    );
  }

  function rightclickHandler() {
    console.log("Right arrow");

    rightApples--;
    leftapples++;

    console.log(rightApples);
    console.log(leftapples);
    ReactDOM.createRoot(document.getElementById("root")).render(
      <AppleContainer />
    );
  }

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
        <Basket count={leftapples} />

        <Button
          clickHandler={leftclickHandler}
          imageUrl={LeftArrow}
          tit="left-arrow"
        />
        <Button
          clickHandler={rightclickHandler}
          imageUrl={RightArrow}
          tit="rightt-arrow"
        />
        <Basket count={rightApples} />
      </div>
    </>
  );
};
export default AppleContainer;
