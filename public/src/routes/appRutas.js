import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";

import Expenses from "./../components/Expenses";
import Nav from "./../components/Nav";
import { Error } from "./../components/Error";
import Help from "./../components/Help";
import Login from ".././components/login";
import Header from "./../components/Header";
import AgregarNuevo from "./../components/AgregarNuevo";
import EditarExpense from "./../components/EditarExpense";
import { history } from "../expensify";
import PrivateRoute from "./privateRoute";

const Rutas = () => (
  <Router history={history}>
    <div>
      <Header />
      <Nav />
      <Switch>
        <Route path="/" component={Login} exact />
        <PrivateRoute path="/expenses" component={Expenses} />
        <PrivateRoute path="/help" component={Help} />
        <PrivateRoute path="/add-expense" component={AgregarNuevo} />
        <PrivateRoute path="/editar/:id" component={EditarExpense} />
        <Route component={Error} />
      </Switch>
    </div>
  </Router>
);

export default Rutas;
