import "react-dates/initialize";
import React, { Component } from "react";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
//import 'react-dates/lib/css/_datepicker.css'; // ! remover modo test JEST 

import { connect } from "react-redux";
export default class FormularioExpense extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: this.props.expense ? this.props.expense.nombre : "",
      monto: props.expense ? (props.expense.monto / 100).toString() : "1",
      creadoEl: props.expense ? moment(props.expense.creadoEl) : moment(),
      calendarFocus: false,
      error: "",
      descripcion: props.expense ? props.expense.descripcion : ""
    };
  }
  onDateChange = creadoEl => {
    if (creadoEl) {
      this.setState(() => ({ creadoEl }));
    }

  };
  onMontoChange = e => {
    let monto = e.target.value;
    if (!e.target.value || String(e.target.value).match(/^\d{1,}\.?\d{0,2}?$/)) {
      this.setState(() => ({ monto }));
    }
  };
  onFocusChange = ({ focused }) => {
    console.log(focused);
    this.setState(() => ({ calendarFocus: focused }));
  };
  onNameChange = e => {
    let nombre = e.target.value;
    this.setState({ nombre });
  };
  onDescChange = e => {
    let descripcion = e.target.value;
    this.setState(() => ({ descripcion }));
  };
  guardarExpense = e => {
    e.preventDefault();
    if (!this.state.monto || !this.state.nombre) {
      this.setState({ error: "CAMPOS OBLIGATORIOS!" });
    } else {
      const { nombre, monto, creadoEl, descripcion } = this.state;
      this.props.guardar({
        nombre,
        monto: parseFloat(monto, 10) * 100,
        creadoEl: creadoEl.valueOf(),
        descripcion
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.guardarExpense}>
          <input
            type="text"
            placeholder={this.state.error ? this.state.error : "Nombre"}
            onChange={this.onNameChange}
            value={this.state.nombre}
          />
          <input
            type="text"
            value={this.state.monto}
            placeholder={this.state.error ? this.state.error : "Monto"}
            onChange={this.onMontoChange}
          />
          <SingleDatePicker
            date={this.state.creadoEl}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocus}
            onFocusChange={this.onFocusChange}
            id="hhhhh"
            small
            numberOfMonths={1}
            isOutsideRange={dia => false}
          />
          <textarea
            placeholder="Descripcion"
            value={this.state.descripcion}
            onChange={this.onDescChange}
          />
          <button>Guardar</button>
        </form>
      </div>
    );
  }
}
// TODO: modificar este componente con redux (hacerlo un componente de presentacion)
