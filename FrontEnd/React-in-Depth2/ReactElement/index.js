// So in this file we are going to learn about what is React.CreateElement behind the scenes....

// let us create a ReactElement ->so jese dom element hota hai wohi reactElement hota hai at the end of the day reactElement bhi dom me hee include hota hai so let us begin.
const h2 = React.createElement(
  "h2",
  { className: "heading" },
  "Hello world through react element"
);

// yeh React.createElement isko ek object me convert kardega jisme kuch key value pairs honge like this So hum h2=React.cretaeElement kiye bina yeh object h2 ko assign kardenge toh bhi hamara reactElement shi work krega.
const h22 = {
  $$typeof: Symbol.for("react.element"),
  type: "h2",
  key: null,
  ref: null,
  props: {
    className: "heading",
    // children me hum multiple children bhi daal skte hai
    children: [
      {
        $$typeof: Symbol.for("react.element"),
        type: "h2",
        key: null,
        ref: null,
        props: {
          className: "heading",
          children: "Hello world through react element",
        },
      },

      {
        $$typeof: Symbol.for("react.element"),
        type: "h1",
        key: null,
        ref: null,
        props: {
          className: "heading",
          children: "Hello world through react element 2",
        },
      },
    ],
  },
  _owner: null,
  _store: {},
};

// Now these h2 and h22 are at the end of the day object
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(h22);
