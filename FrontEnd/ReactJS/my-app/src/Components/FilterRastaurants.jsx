import data from "../utils/mock";
import ReactDOM from 'react-dom/client'
import Card from "./Card"
// This is the component to filter the data
function FilterRastaurants() {
    return (
        <>
            <button className="toprated-btn" onClick={() => {
                const filtered = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.filter((resCard) => {
                    return resCard.info.avgRating <= 4.2;
                }
                )
                console.log(filtered);

                const root=ReactDOM.createRoot(document.querySelector(".res-container"));
                root.render(<>
                {
                    filtered.map((cardData)=>{
                        return <Card resData={cardData.info}/>
                    })
                }
                </>)
                

            }}>Toprated rastaurants</button>
        </>
    )
}

export default FilterRastaurants