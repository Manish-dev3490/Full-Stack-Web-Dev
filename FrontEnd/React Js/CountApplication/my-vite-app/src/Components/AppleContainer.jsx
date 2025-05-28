import Button from "./Button";
import LeftArrow from '../assets/left.png';
import RightArrow from '../assets/right.png';
import Basket from "./Basket";

const AppleContainer = function () {
    return (
        <div className="AppleContainer" style={{ marginInline: '6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Basket count={1} />

            <Button imageUrl={LeftArrow} tit='left-arrow' />
            <Button imageUrl={RightArrow} tit='rightt-arrow' />
            <Basket count={2} />


        </div>
    )
}
export default AppleContainer;