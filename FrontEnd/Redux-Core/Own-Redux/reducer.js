// This will be our initial state otherwise it will be undefined
 export const initialState={
    count:0,
    name:'manish',
    class:12
}


// This is the reducer function which we are creating
 export function reducer(state=initialState,action){
if(action.type==='count/increase')return{...state,count:state.count+1};
else if(action.type==='count/decrease')return{...state,count:state.count-1};
else if(action.type==='count/decreaseBy')return{...state,count:state.count-action.payload};
else if(action.type==='count/increaseBy')return{...state,count:state.count+action.payload};
else return state;
}
