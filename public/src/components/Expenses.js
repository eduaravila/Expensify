import React from "react";

import  ListaExpenses  from "./listaExpense";
import  FiltroTexto from "./filtroTexto";
const Expenses = () => (
  <div>
    <FiltroTexto />
    <ListaExpenses />
  </div>
);

export default Expenses;
