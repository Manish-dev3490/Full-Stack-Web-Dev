// This is the card component for our application 
const Card = () => {
  return (
    <div className="res-card">
      <img src="https://images7.alphacoders.com/596/596343.jpg" alt="pizza" />
      <div className="card-desc">
        <h3>Title of the resaturent</h3>
        <h4>ratings</h4>
        <p>cuisnes Data</p>
        <p>Delivery Time  30 minutes</p>
      </div>

    </div>
  )
}

export default Card