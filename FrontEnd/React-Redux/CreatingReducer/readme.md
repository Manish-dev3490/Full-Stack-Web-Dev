// So let me tell you all things about the redux core flow . Redux is a library which is used for state management by using we can prevent our react application from props drilling and they have given us context api for state management but if our application becomes bigger then it will be very tought to maintain the store.So redux gave us the functionality of slices in store.

// Store--> Store in a redux is like global container where we initialize our state so lets us understand in the earlier days when we use redux they gave us createStore() function which takes two paramneters first is reducer and second is _REDUX_DEV_EXTENSION for connecting react with redux stre.This function creates a store and return a object in that there are some key value pair like dispatch,reducers,combineReducers,subscribe,observal and some other key value pairs.

// Reducer--->So assume there is count variable in our store and which is on our ui and i want to increase || change the state so we have to write reducer . Reducer is a function which takes the initial state when count is 0 .reducer have access to the initial state and action.

// Action-->are the function just like we want to incraese the count on click so we will write this function that is called action.Action is a object which contains two key value pairs type and payload.

// Dispatch--->Dispatch is a very important function whicih is used for when we have to change the state we define action in the dispatch function and dispatch is called and goes to the store and it initially calls the reducers becuase reducers have access to the initial state and action and jo action dispatch ke paas hota hai woh reducer ko ded dete hai so according to the action,.type reducer function us action ko call krke state change kr deta hai.

// getState -->get state is function which is given to us by store it is a function it is used for when you have to knwo the value of the state.

// subscribe-->subscribe is a method whicih is used for jab jab state change hoti hai toh ek array hota hai store me listener uske andar yeh function daal deta hai aur jab woh function dispatch hota hai .