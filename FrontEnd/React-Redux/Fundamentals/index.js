// So in redux there is a global Store where we integrate our states so let us learn fundamentals step by step in the below code;


// Assume this is the redux store and now we have to update its state without mutating the object 
let Store={
count:0
}

// So we will do by first copy the object using spread operator then now we have currentObject and we update we want
function incrementCount(currentState){
    return {...currentState,count:currentState.count+1};
}

// This incrementCount is returning us a new object with updated value
const updatedState=incrementCount(Store);