// component for basket 
const Basket = ({ count,val }) => {
    return (
        <div className="basket">
            <h2><span>{count}</span> Apples</h2>
            <h2>Basket <span>{val}</span></h2>
        </div>
    )
}
export default Basket;