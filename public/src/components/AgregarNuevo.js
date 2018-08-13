import React from "react";
import FormularioExpense from "./FormularioExpense";
import { store } from "./../reducer/store";
import { connect } from "react-redux";
import { agregarTodo } from "./../reducer/actions/todos";
export const AgregarNuevo = ({ guardar }) => {
  return (
    <div>
      <h1>Agregar nuevo Expense</h1>
      <FormularioExpense guardar={guardar} />
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  guardar: info => {
    dispatch(agregarTodo(info));
    ownProps.history.push("/");
  }
});
export default connect(
  undefined,
  mapDispatchToProps
)(AgregarNuevo);
