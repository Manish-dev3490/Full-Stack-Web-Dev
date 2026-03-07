// Why we need React : All the reasons are written here please read and understand you will get to know why we need it
function whyWeNeedReactReasons() {
  // Today we are going to start learning react so lets see why do we even need react we are going to see things through the example by example.so our task is to create some  js element and append that into root and dekhna dry principle follow nahi hora.

  const elem1 = document.createElement("h1");
  const root = document.querySelector(".root");
  elem1.textContent = "Leraning The React Js";
  elem1.style.color = "red";
  elem1.style.fontSize = "1rem";
  elem1.style.backgroundColor = "black";

  const elem2 = document.createElement("h1");
  elem2.textContent = "Js";
  elem2.style.color = "red";
  elem2.style.fontSize = "1rem";
  elem2.style.backgroundColor = "black";

  root.append(elem1);
  root.append(elem2);

  // So yes it is very hectic to create element like this agar cheeze repeat hori hai so when things get repeat do that thorigh the function so lets make a function jo humko element create krke de because yaha dry principle follow nahi ho raha.So yes dekho nicche kaafi easy hogya elements create krna.

  function createElement(tag, attributes, children) {
    // This is for creating element
    const element = document.createElement(tag);
    element.textContent = children;
    // lets put attriibutes in that element like class, id, style so jo attributes honge woh ek object aaygea because multiple values aayege toh ek object me wrap up hokar aayegi toh hum ek ek karke toh daalege nahi object par iterate krna pdega

    for (key in attributes) {
      if (key == "style") {
        Object.assign(element.style, attributes.style);
      } else element[key] = attributes[key];
    }

    return element;
  }

  const elem3 = createElement(
    "h1",
    {
      class: "elem",
      id: "element",
      style: {
        fontSize: "15px",
        color: "green",
        backgroundColor: "yellow",
      },
    },
    "Hello world through coding",
  );
  const elem4 = createElement(
    "h1",
    {
      class: "elem",
      id: "elements",
      style: {
        fontSize: "15px",
        color: "green",
        backgroundColor: "yellow",
      },
    },
    "Hello world",
  );

  root.append(elem3);
  root.append(elem4);
}

// Now let me tel you about the React Introduction->So React is nothing but just a js library(menaning of library is the predefined code we have to only use likhne ki jrurt nahi just like in c++ stl we dont have to create stack,queue,priorityqueue,map,set,sort function all are predefined).so react is also just a library buss isko use krna hai humko ek object milta hai React naam ka jo banaya hai facebook meta ke developers ne productvity increase krne ke liye baar baar dry principle naah ho and aur bhi bahut reasons hai sab dekehege and react ek object hai usme diffrent multiple functions methods and jinki alag alag functionalities hai aur kuch nahi.

const React = {
  createElement: function (tag, attributes, children) {
    return {
      type: tag,
      props: {
        ...attributes,
        children,
      },
      ref: null,
      owner: null,
      store: null,
    };
  },
  createRoot: function () { },
};

const ReactDOM = {
  render: function (element, root) {
    const { props } = element;
    console.log(props);

    const elem = document.createElement(props.tag);
    for (const key in props) {
      if (key === "style") {
        Object.assign(elem.style, props.style);
      } else if (key === "children") {
        elem.textContent = props.children;
      } else elem.key = props.key;
    }
    root.append(elem);
  },
};
const elem1 = React.createElement("h1", { class: "elem", id: "element", style: { fontSize: "20px", color: "red", backgroundColor: "black" } }, "Hello baccho kese ho aap");

const root = document.querySelector(".root");
ReactDOM.render(elem1, root);
