import Button from "./Button";
import LeftArrow from "../assets/left.png";
import RightArrow from "../assets/right.png";
import Basket from "./Basket";




const AppleContainer = function () {


    const totalApples = 10;
    let leftapples = totalApples - 5;
    let rightApples = totalApples - leftapples;

    function leftclickHandler() {
        console.log("Left arrow");
        rightApples++;
        leftapples--;
        console.log(rightApples);
        console.log(leftapples);


    }

    function rightclickHandler() {
        console.log("Right arrow");
        rightApples--;
        leftapples++;

        console.log(rightApples);
        console.log(leftapples);
    }

    return (
        <div
            className="AppleContainer"
            style={{
                marginInline: "6rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Basket count={totalApples} />

            <Button clickHandler={leftclickHandler} imageUrl={LeftArrow} tit="left-arrow" />
            <Button
                clickHandler={rightclickHandler}
                imageUrl={RightArrow}
                tit="rightt-arrow"
            />
            <Basket count={0} />
        </div>
    );
};
export default AppleContainer;
