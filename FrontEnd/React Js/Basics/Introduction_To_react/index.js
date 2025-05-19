// In this file we are going to learn about React js so before moving into the react js we have to know about why should we learn react js and what is the need of the react js ?

// So when we make application using html css javascript so whenever we have to load some data in our web appluication we have to make server call which reload our page which is not very optimize it make call to server due to the application becaome very slow thatstwhy it is a like a multiple page application this is the need of the react....

// React js is javascript library it is nothing just some peice of javascript code now initially our borwoser does not understand react we have to fetch get react into our project there are two ways to get react into our project usng cdn links and using npm.....

// using cdn - content delivery network is a website where libraries are hosted which provide us a link to get library into our project let us see the react using cdn linkss....

// React.createElement is a function which is used to create DOM elements just like we used to create in vanila javascript document.createelement("elementType") it is also in the end making DOM element but in vanilla js we have to assign property and content separetly.in this we assign properties attributes together ....This is how we create elements and there children in react but this way was in intitial days of react.

const containerSection = React.createElement(
    "div",
    { className: "container-section" },
    [
        React.createElement("h2", { className: "heading", key: 1 }, [
            React.createElement(
                "span",
                { className: "special", key: 2 },
                "hello react"
            ),
        ]),

        React.createElement("h2", { className: "heading", key: 2 }, [
            React.createElement(
                "span",
                { className: "special", key: 2 },
                "hello react"
            ),
        ]),

        React.createElement("h2", { className: "heading", key: 3 }, [
            React.createElement(
                "span",
                { className: "special", key: 2 },
                "hello react"
            ),
        ]),
    ]
);


// createRoot is the function which defines where we have to append our reactElement
const root = ReactDOM.createRoot(document.querySelector(".container"));
// Render is just like the append it render the react elements into the DOM
root.render(containerSection);
