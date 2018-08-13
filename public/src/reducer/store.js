import { combineReducers, createStore } from "redux";
import Filtro from "./reducers/filtro";
import Todos from "./reducers/todos";

 const Reducer = combineReducers({ Todos, Filtro });
export const store = createStore(Reducer);

//,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()