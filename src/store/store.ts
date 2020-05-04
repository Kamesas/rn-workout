import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

import { workoutStore } from "./reducers/workoutReducer";
import { authReducer } from "./reducers/authReducer";

const rootReducer = combineReducers({
  workoutStore,
  authReducer,
});

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, middleWareEnhancer);

  return store;
}
