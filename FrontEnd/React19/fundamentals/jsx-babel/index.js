// So before jsx there is very hectic and unmaintainable structure to create nested elments and this is where we need any easy mechanism to create element in react so pehle problem dekh lete hai...


const element=React.createElement("div",{},[
    React.createElement("h1",{},"Hello world"),
    React.createElement("h2",{},"Hello world "),
    React.createElement("h2",{},"Hello world "),
])

// So this is the problem agar koi bada html element ho jisme bada sturcture ho toh maintain krna bada mushkil hoga so yaha react devs ne socha ek mechanism hum html syntax se bahut familiar hote hai toh ek mechanism jsx same sytnax like html but not actual html.jsx likhenge aur ek engine bnaya jisko bolte hai babel woh us jsx ko input lega and React.creeateElement() vaale syntax me convert krdega so lets grab babel into out project and lets write jsx ... And dekho nicche jsx se likhna kitna easy hai this is the beauty of the jsx and babel.

const elem2=<div>
    <h1>hello world</h1>
    <h1>hello world</h1>
    <h1>hello world</h1>
    <h1>hello world</h1>
</div>


const root=ReactDOM.createRoot(document.querySelector(".root")).render(elem2)