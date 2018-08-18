import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const PrivateRoute = ({
  component: Component,
  autenticado,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      autenticado ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => ({
  autenticado: state.Auth.uuid ? true : false
});
export default connect(mapStateToProps)(PrivateRoute);
