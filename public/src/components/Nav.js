import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <div>
    <ul>
      <li>
        <Link to="/"> inicio </Link>
      </li>
      <li>
        <Link to="/add-expense">Nuevo expense</Link>
      </li>
      <li>
      <Link to='/help'> ayuda </Link>
      </li>
    </ul>
  </div>
);

export default Nav;
