// This is the createStore function which redux offers us we are creating our own redux library
const createStore = (reducer,initialState) => {
  let state=initialState;
  return {
    getState: () => {
      return state;
    },

    dispatch: (action) => {
      state = reducer(state, action);
    },
    subscribe: (callback) => {},
  };
};

export default createStore;
