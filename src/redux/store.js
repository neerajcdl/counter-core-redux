import { createStore } from "redux";
import { counterReducer } from "./reducers/reducers";

const store = createStore(counterReducer);
export default store;



// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { counterReducer } from "./reducers/reducers";

// const store = createStore(counterReducer, composeWithDevTools());
// export default store;
