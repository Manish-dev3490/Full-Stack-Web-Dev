// No we are going to learn about what the JSX and babel is so you know how we used to create element in React by doing React.createEelement which takes 3 parameters one is element type second one is object for properties and third is content and if we have to cmbine multiple element it will be very hectic and unreadble task so overcome to this there is a way to create Recat element without using this syntax with using JSX --> JSX is a html like syntax which we used to create react element and jsx behind the scene use babel transpiler which used to convert the jsx into the reactElement behind the scene ......Below the code is example how we used to create react elements without jsx

// const containerSection = React.createElement(
//     "div",
//     { className: "container-section" },
//     [
//         React.createElement("h2", { className: "heading", key: 1 }, [
//             React.createElement(
//                 "span",
//                 { className: "special", key: 2 },
//                 "hello react"
//             ),
//         ]),

//         React.createElement("h2", { className: "heading", key: 2 }, [
//             React.createElement(
//                 "span",
//                 { className: "special", key: 2 },
//                 "hello react"
//             ),
//         ]),

//         React.createElement("h2", { className: "heading", key: 3 }, [
//             React.createElement(
//                 "span",
//                 { className: "special", key: 2 },
//                 "hello react"
//             ),
//         ]),
//     ]
// );

// How to create react elements using jsx let us see --> So this is how we write jsx it is javascript xml it is a html like syntax which increase developer productivity and experience but babel is a transpiler which is converting this code into react element behind the scene it is just syntatcical sugar.Behind the scene it is also transpiled into react.createEelement and big big objects.this is the benift of jsx and babel


let name="Manish";

const heading = (
    <div className="heading-data">
        <h2>Hello World By JSX and BABEL</h2>
        <h1>Learning</h1>
    </div>
);
const root = ReactDOM.createRoot(document.querySelector(".container"));
root.render(heading);
