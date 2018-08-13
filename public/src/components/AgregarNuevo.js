import React from "react";
import FormularioExpense from "./FormularioExpense";
import { store } from "./../reducer/store";
import { agregarTodo } from "./../reducer/actions/todos";
const AgregarNuevo = props => {
  return (
    <div>
      <h1>Agregar nuevo Expense</h1>
      <FormularioExpense
        guardar={info => {
          store.dispatch(agregarTodo(info));
          props.history.push("/");
        }}
      />
    </div>
  );
};

export default AgregarNuevo;
