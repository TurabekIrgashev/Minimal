import { createStore } from "redux";

const initialState = {
  layout: {
    language: "english",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      console.log("dsds");
      return {
        ...state,
        layout: { ...state.layout, language: action.payload.data },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

// const dispatch = store.dispatch;

// export { dispatch };

export default store;
