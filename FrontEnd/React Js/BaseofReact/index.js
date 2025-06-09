// In this file i am going to learn how react is actually working behind the scene we know there are two ways to get react into our project with using cdn links and using npm || yarn.but understand how it works behind the scene .so when we get reactinto our code whole code of react get into our file and we use that let me show you how it actually works

// Problem 1 -> we have to create a element h2 we will create it with docuemnt.createElement("h2") and it is object at the end of the day we will put innerText style using . dot operator but it is very lengthy and hectic and code becaomes very unreadable so let us learn with react

// Solution below the line this is how react code is written in the react files that we use from cdn and using npm
const React = {
  // This is how actual code of react is written behind the scenes by the facebook engineers
  createElement: function (tagName, styles, children) {
    const element = document.createElement(tagName);

    // Now we will recieve styles properties we have to apply style on element but ek ek karke lagana is not possible because bhut saari properties ho skti hai so use loop

    // element.style.fontSize=styles.fontSize;
    // element.style.backgroundColor=styles.backgroundColor;


    // Use forn in loop for iterating over the objects
    for (let key in styles) {
        element.style[key]=styles[key];
    }

    // jo bhi children aayega usko hum element me daal denge
    element.innerText = children;
    return element;
  },
};

// Now create element by using React.createElement
const h1 = React.createElement(
  "h1",
  { fontSize: "30px", backgroundColor: "red" },
  "hello to the world"
);
const h2 = React.createElement(
  "h2",
  { fontSize: "20px", backgroundColor: "green" },
  "hello again to the world"
);

const root = document.getElementById("root");
root.append(h1);
root.append(h2);
