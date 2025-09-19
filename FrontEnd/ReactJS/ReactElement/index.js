//  We have to create hello world program using react okay so to create an element we have method in react library whose name is React.createElement() which is used to create react element . Now we are going to see Recat.craeeteElement() in Depth;

const h1 = React.createElement("h1", {}, "Hello world");
// console.log(h1);

// React.createElement() is nothing but an object behind the scenes like this {
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         "children": "heelo"
//     },
//     "_owner": null,
//     "_store": {}
// } jo props hum creation ke time paas krte hai is object ke props object me aaayegi





//RENDER()----> So now we are going to render the react element on dom which can be done only by ReactDOM library render method .Render method is used to take a react element and behind the scenes convert that react element into dom element and then append into dom.because browser does not understand react browser only understand javascript thatswhy react element is converted into dom element by render method and then append into dom
const root = ReactDOM.createRoot(document.querySelector(".root"));
// root.render(h1);





// ReactElement is OBJECT --->So react element behind the scenes ek object hai toh hum render method ko directly object paas bhi kr skte let me show you just for understanding real world me hum react.createElement se kaam nahi krte because uska sytax bahut unreadble,lengthy,messy,unstructured hai we use JSX hum dekehege usko bhi.
const h2 = {
  $$typeof: Symbol.for("react.element"),
  type: "h2",
  key: null,
  ref: null,
  props: {
    children: "hello world",
  },
  _owner: null,
  _store: {},
};
// root.render(h2);



// React element usinfg React.createElement me hum nested element bhi bana skte hai lekin bhut complex structure messy unreadble hojaata hai isliye iska alternative hai JSX we are going to see that in next files.


