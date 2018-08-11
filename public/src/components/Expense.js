import React from "react";
import { Link } from "react-router-dom";
export const Expense = ({ nombre, id, func, descripcion, creadoEl, monto }) => (
  <li>
    <Link to={`/editar/${id}`}>
      <h1> {nombre} </h1>
    </Link>
    <p>{descripcion}</p>
    <button onClick={() => func(id)}>Eliminar</button>
  </li>
);
