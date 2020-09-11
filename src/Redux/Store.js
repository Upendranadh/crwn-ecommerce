import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import logger from "redux-logger";

import RootReducer from "./Root-reducer";

const middleWare = [logger];

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
