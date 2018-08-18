import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";

import { agregarTodo, setTodosSync } from "./reducer/actions/todos";
import { login, logOut } from "./reducer/actions/auth";
import { firebase } from "./firebase/firebase";
import { store } from "./reducer/store";
import Rutas from "./routes/appRutas";

export const history = createHistory(); // ? Exporta el historial a toda la aplicion para que todos puedan manipularlo

let renderizado = false;
ReactDom.render(
  <Provider store={store}>
    <Rutas />
  </Provider>,
  document.getElementById("titulo")
);
const poblarApp = () => {
  if (!renderizado) {
    ReactDom.render(
      <Provider store={store}>
        <Rutas />
      </Provider>,
      document.getElementById("titulo")
    );
    renderizado = true;
  }
};

firebase.auth().onAuthStateChanged(result => {
  if (result) {
    (async () => {
      try {
        await store.dispatch(setTodosSync());
        poblarApp();
        store.dispatch(login(result.uid));
        history.push("/expenses");
      } catch (e) {
        console.log(e);
      }
    })();
  } else {
    poblarApp();
    store.dispatch(logOut());
    history.push("/");
  }
});

// store.dispatch(
//   agregarTodo({
//     descripcion: "nuevo item",
//     creadoEl: 100,
//     monto: 200000,
//     nombre: "nuevo item"
//   })
// );
// store.dispatch(
//   agregarTodo({
//     descripcion: "nuevo dos",
//     creadoEl: 1200,
//     monto: 1000,
//     nombre: "nuevo dos"
//   })
// );
// store.dispatch(filtrarTexto({ texto: "dos" }));
// let visibles = TodosVisibles(store.getState().Todos, store.getState().Filtro);
// console.log(store.getState(), visibles);
