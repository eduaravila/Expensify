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
const Rutas = () => (
  <Router history={history}>
    <div>
      <Header />
      <Nav />
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/expenses" component={Expenses} />
        <Route path="/help" component={Help} />
        <Route path="/add-expense" component={AgregarNuevo} />
        <Route path="/editar/:id" component={EditarExpense} />
        <Route component={Error} />
      </Switch>
    </div>
  </Router>
);

export default Rutas;
