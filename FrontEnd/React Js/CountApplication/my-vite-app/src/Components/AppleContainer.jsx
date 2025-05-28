import Button from "./Button";
import LeftArrow from '../assets/left.png';
import RightArrow from '../assets/right.png';

const AppleContainer = function () {
    return (
        <div className="AppleContainer" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Button imageUrl={LeftArrow}/>
            <Button imageUrl={RightArrow}/>
        </div>
    )
}
export default AppleContainer;