// So in redux there is a global Store where we integrate our states so let us learn fundamentals step by step in the below code;


// Assume this is the redux store and now we have to update its state without mutating(directly accessing the key values) of the object 
let Store = {
    count: 0
}

// So we will do by first copy the object using spread operator then now we have currentObject and we update we want
function incrementCount(currentState) {
    // we dont have to do this
    // Store.count=Store.count+1;

    // Not mutating we are actually changing the object
    return { ...currentState, count: currentState.count + 1 };
}

// This incrementCount is returning us a new object with updated value and we are not even mutating our object
Store = incrementCount(Store);
console.log(Store);
