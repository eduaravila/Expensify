import React from "react";
import { connect } from "react-redux";
import { TodosVisibles } from "../reducer/selectors/visibles";
import numeral from "numeral";

 const sumaSeleccionadas = expense =>
  expense.map(i => i.monto).reduce((a, b) => a + b, 0);

export const SumaTotal = ({ tamaño, total }) => (
  <div>
    <h1>
      Expenses seleccionadas {tamaño > 0 ? tamaño : 0} total de{" "}
      {numeral(total / 100).format("$0,0.00")}
    </h1>
  </div>
);

const mapStateToProps = state => {
  return {
    tamaño: TodosVisibles(state.Todos, state.Filtro).length,
    total: sumaSeleccionadas(TodosVisibles(state.Todos, state.Filtro))
  };
};
export default connect(mapStateToProps)(SumaTotal);
