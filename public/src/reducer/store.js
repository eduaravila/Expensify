import Filtro from "./reducers/filtro";
import Todos from "./reducers/todos";
import Auth from "./reducers/auth";

import thunk from "redux-thunk";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";

const composeEnhancers =compose;
const Reducer = combineReducers({ Todos, Filtro, Auth });
export const store = createStore(
  Reducer,
  composeEnhancers(applyMiddleware(thunk))
);
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || 
