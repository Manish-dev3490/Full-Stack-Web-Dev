// I am going to create my whole small redux library for understanding the things behind the scenes . And now i am going to create A redux store

export function createStore(Reducer) {

    let initialState = {
        count: 0,
        name: "manish",
        age: 22,
        conatct: 9643623490,
        address: "359 chirag delhi",
        qualiication: "BCA",
    };

    const store = {
        dispatch(action) {
            Reducer(State,action);
        },
        subscribe() {

        },
        getState() {
            return initialState
        }
    }
    return store;
}