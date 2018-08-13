import React from "react";
import { connect } from "react-redux";

import { TodosVisibles } from "./../reducer/selectors/visibles";
import { eliminarTodo } from "./../reducer/actions/todos";
import { Expense } from "./Expense";
import { dispatch } from "rxjs/internal/observable/range";
export const ListaExpenses = ({ todos, func }) => (
  <div>
    <h1>Expenses</h1>
    {todos ? (
      <ul>
        {todos.map(i => (
          <Expense key={i.id} {...i} func={func} />
        ))}
      </ul>
    ) : (
      <h1>No hay expenses</h1>
    )}
  </div>
);

const mapStateToProps = state => ({
  todos: TodosVisibles(state.Todos, state.Filtro)
});
const mapDispatchToProps = dispatch => ({
  func: id => {
    dispatch(eliminarTodo({ id }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaExpenses);
