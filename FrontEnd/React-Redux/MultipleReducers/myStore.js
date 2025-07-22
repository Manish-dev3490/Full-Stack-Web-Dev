

export function createStore(Reducer) {
  let initialState = {
    count: 0,
    name: "manish",
    age: 22,
    conatct: 9643623490,
    address: "359 chirag delhi",
    qualiication: "BCA",
  };

  let listeners = [];

  const store = {
    dispatch(action) {
      initialState = Reducer(initialState, action);

      for (let listener of listeners) {
        listener(); // listener ko call karna = update trigger
      }
    },
    subscribe(listner) {
      listeners.push(listner);

      // unsubscribe function return karna
      return function unsubscribe() {
        listeners = listeners.filter((l) => l !== listner);
      };
    },
    getState() {
      return initialState;
    },
  };

  store.dispatch({ type: "@@INITi" });
  return store;
}
