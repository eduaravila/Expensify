import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import Expenses from "./../components/Expenses";
import Nav from "./../components/Nav";
import { Error } from "./../components/Error";
import Help from "./../components/Help";
import Header from "./../components/Header";
import  AgregarNuevo  from "./../components/AgregarNuevo";
import EditarExpense from "./../components/EditarExpense";
const Rutas = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Nav />
      <Switch>
        <Route path="/" component={Expenses} exact />
        <Route path="/help" component={Help} />
        <Route path="/add-expense" component={AgregarNuevo} />
        <Route path='/editar/:id' component={EditarExpense} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Rutas;
