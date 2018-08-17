import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import Filtro from "./reducers/filtro";
import Todos from "./reducers/todos";
import thunk from "redux-thunk";

const composeEnhancers = compose; 
const Reducer = combineReducers({ Todos, Filtro });
export const store = createStore(
  Reducer,
  composeEnhancers(applyMiddleware(thunk))
);
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || 