import {
  DECREMENT,
  INCREMENT,
  INCREMENTBYVALUE,
  RESET,
} from "../actions/actions";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case INCREMENTBYVALUE: {
      return { ...state, count: state.count + action.payload  };
    }
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};
