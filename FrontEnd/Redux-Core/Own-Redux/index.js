import createStore from "./store.js";
import { initialState ,reducer} from "./reducer.js";



const store=createStore(reducer,initialState);

store.dispatch({type:'count/increase'});
console.log(store.getState());


