import { legacy_createStore } from "redux";


// Assume kro yeh hamare react app ki puri saari states hai ek store me inko update krne ke liye ek helper function chahiye which is called reducer in redux. 
let reduxState={
    count:0,
    age:23,
    name:'manish'
}

// reducer- reducer is a helper function which is used to take 2 arguments state of the application and action jisse yeh pata chlega puri app ki state me kis state ko change krna hai aur kya change krna hai.

function reducer(state=reduxState,action){
if(action.type==='count/increase')return {...state,count:state.count+1};
else if(action.type==='count/decrease')return {...state,count:state.count-1};
else if(action.type==='count/decreaseBy')return {...state,count:state.count-action.payload};
else if(action.type==='count/increaseBy')return {...state,count:state.count+action.payload};
else return reduxState; 
}



const store=legacy_createStore(reducer);
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch({type:'count/increase',payload:undefined});
store.dispatch({type:'count/increase',payload:undefined});
store.dispatch({type:'count/increase',payload:undefined});
