import React from "react";
import { Link } from "react-router-dom";
import {logoutconGoogle} from '../reducer/actions/auth'
import {connect} from 'react-redux';

export const Nav = ({logOut}) => (
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
    <button onClick={logOut}>Log out</button>
  </div>
);


const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      dispatch(logoutconGoogle());
    }
  }
}
export default connect(undefined,mapDispatchToProps)(Nav)

