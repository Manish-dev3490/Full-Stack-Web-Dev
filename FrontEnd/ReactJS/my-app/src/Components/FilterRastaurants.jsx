import data from "../utils/mock";
import ReactDOM from 'react-dom/client'
import Card from "./Card"

function FilterRastaurants(props) {
    const {  setValue } = props

    return (
        <>
            <button className="toprated-btn" onClick={() => {
                const filtered = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.filter((resCard) => {
                    return resCard.info.avgRating <= 4.2;
                }
                )

                setValue(filtered);
            }}>Toprated rastaurants</button>
        </>
    )
}

export default FilterRastaurants