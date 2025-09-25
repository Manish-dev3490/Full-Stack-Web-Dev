import React from 'react'
import ReactDOM from 'react-dom/client'


// Task 1 - we have a task humko ek card banana hai jisme image description title price hoga and usko render krna hai into the root.

const card = (
    <div className='card'>
        <img src='https://tse4.mm.bing.net/th/id/OIP.Y5Ygai29oo36dlek7s7TdQHaE7?pid=Api&P=0&h=180' alt='phone/' />
        <h2>This is I phone</h2>
        <p>Price is 1000$</p>
    </div>
)

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(card);



// Task 2 - we have to render card 30 times but with dynamic data toh akya 30 bar alag alag krke card banayege nahi naah yaha introduce hota hai component.everything in react is component h2,h1,p,div,section header foter everything.there are two types of components functional and class we will study about functional components.functional component is nothing but javascript function which return some peices of jsx.

function CreateCard(props) {
    
    return (
        <div className='card' key={props?.props.id}>
            <img src={props?.props.thumbnail}  alt='phone/' />
            <h2>{props?.title}</h2>
            <p>{props.description}</p>
        </div>

    )
}



async function fetchData() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    
    root.render(

    data?.products?.map((card)=>{
       return <CreateCard key={card.id} props={card} />
    })

)
}

fetchData()






