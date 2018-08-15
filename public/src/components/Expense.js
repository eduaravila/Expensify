import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

export const Expense = ({ nombre, id, func, descripcion, creadoEl, monto }) => (
  <li>
    <Link to={`/editar/${id}`}>
      <h1> {nombre} </h1>
    </Link>
    <p>{descripcion}</p>
    <p>{moment(creadoEl).format("Do MMM YYYY")}</p>
    <p>{numeral(monto / 100).format("$0,0.00")}</p>
    <button onClick={() => func(id)}>Eliminar</button>
  </li>
);
