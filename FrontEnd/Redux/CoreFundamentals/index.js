// In this file i am going to start learning redux but before moving to the redux let us understand how react updates its states . so in react for updating states that uses concepts of not mutating object directly let us look at the example.
let state = {
  name: "manish",
  class: 12,
  count: 1,
};



// Now i want to change its count value to 2 so one way is to update it like mutating directly let me show you by doing that directly.so this below code will update state directly but react does not understand this ---> state.count=state.count+1;



// Now we have to understand how react do state updation behind the scenes now we a re going to implement that functionality concept which uses changing the object without mutating and react also do like this behind the scenes for updating the state because what we are doing here we are copying all the value of object into new one and updating value in new object now in later state will have totally new object this is how react actuallly do .
function changeState(state) {
  return { ...state, count: state.count + 1 };
}

state = changeState(state);
console.log(state);
