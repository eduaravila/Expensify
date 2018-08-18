import React from "react";
import { ingresarConGoogle } from "../reducer/actions/auth";
import { connect } from "react-redux";

export const Login = ({ login }) => (
  <div>
    <h1>Ingresar a tu cuenta</h1>
    <button onClick={login}>Login con google</button>
  </div>
);
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      dispatch(ingresarConGoogle());
    }
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(Login);
