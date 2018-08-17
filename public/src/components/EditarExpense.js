import React from "react";
import FormularioExpense from "./FormularioExpense";
import {
  editarTodo,
  eliminarTodo,
  editarTodoSync,
  eliminarTodoSync
} from "./../reducer/actions/todos";
import { connect } from "react-redux";
export const EditarExpense = ({ expense, guardar, eliminar }) => (
  <div>
    <h1>Editar Expense</h1>
    <FormularioExpense expense={expense} guardar={guardar} />
    <button onClick={eliminar}>Eliminar</button>
  </div>
);

//? funcionalidad y actualizar con redux

const mapStateToProps = (state, ownProps) => ({
  expense: state.Todos.find(i => i.id === ownProps.match.params.id)
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  guardar: nuevasProps => {
    dispatch(
      editarTodoSync({
        id: ownProps.match.params.id,
        propiedades: { ...nuevasProps }
      })
    );
    ownProps.history.push("/");
  },
  eliminar: () => {
    dispatch(eliminarTodoSync({ id: ownProps.match.params.id }));
    ownProps.history.push("/");
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditarExpense);
