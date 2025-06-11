// This is how actual code of react is written behind the scenes by the facebook engineers
const React = {
  createElement: function (tagName, styles, children) {
    const element = document.createElement(tagName);

    for (let key in styles) {
      element.style[key] = styles[key];
    }
    element.innerText = children;
    return element;
  },
};

// Behind the scenes of library RECATDOM
const ReactDOM = {
  render: function (element, root) {
    root.append(element);
  }
}

// Now create element by using React.createElement
const h1 = React.createElement("h1", { fontSize: "30px", backgroundColor: "red", color: "blue" }, "hello to the world");
const h2 = React.createElement("h2", { fontSize: "20px", backgroundColor: "green" }, "hello again to the world"
);


// we are appending element in rot using javascript lets append using REACTDOM
// const root = document.getElementById("root");
// root.append(h1);
// root.append(h2);



// we will render the elements using ReactDOM
ReactDOM.render(h1,document.getElementById("root"));
ReactDOM.render(h2,document.getElementById("root"));
