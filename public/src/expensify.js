import React from "react";
import ReactDom from "react-dom";
import { store } from "./reducer/store";
import { agregarTodo } from "./reducer/actions/todos";
import { filtrarTexto, filtrarPorMonto } from "./reducer/actions/filtro";
import { TodosVisibles } from "./reducer/selectors/visibles";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./firebase/firebase";
import Rutas from "./routes/appRutas";

store.dispatch(
  agregarTodo({
    descripcion: "nuevo item",
    creadoEl: 100,
    monto: 200000,
    nombre: "nuevo item"
  })
);
store.dispatch(
  agregarTodo({
    descripcion: "nuevo dos",
    creadoEl: 1200,
    monto: 1000,
    nombre: "nuevo dos"
  })
);
store.dispatch(filtrarTexto({ texto: "dos" }));
let visibles = TodosVisibles(store.getState().Todos, store.getState().Filtro);
console.log(store.getState(), visibles);
ReactDom.render(
  <Provider store={store}>
    <Rutas />
  </Provider>,
  document.getElementById("titulo")
);
