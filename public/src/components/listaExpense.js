import React from "react";
import { connect } from "react-redux";

import { TodosVisibles } from "./../reducer/selectors/visibles";
import { eliminarTodo } from "./../reducer/actions/todos";
import { Expense } from "./Expense";
import { dispatch } from "rxjs/internal/observable/range";
const ListaExpenses = ({ todos, func }) => (
  <div>
    <h1>Expenses</h1>
    <ul>
      {todos.map(i => (
        <Expense key={i.id} {...i} func={func} />
      ))}
    </ul>
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
