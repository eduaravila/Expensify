import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import uuidv1 from "uuid/v1";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  filtrarTexto,
  filtrarPorFecha,
  filtrarPorMonto,
  cambiarFechaInicio,
  cambiarFechaFin
} from "./../reducer/actions/filtro";
export class FiltroTexto extends Component {
  state = { focusedInput: null };
  onFocusChange = focusedInput => {
    this.setState(() => ({ focusedInput }));
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.texto}
          ref={e => (this.input = e)}
          onChange={e => this.props.func(e.target.value)}
        />
        <select onChange={e => this.props.ordenarPor(e.target.value)}>
          <option value="monto">Monto</option>
          <option value="fecha">Fecha</option>
        </select>
        <DateRangePicker
          startDate={this.props.inicio}
          startDateId={"a"}
          endDate={this.props.fin}
          endDateId={"b"}
          onDatesChange={({ startDate, endDate }) => {
            this.props.actualizaInicio(startDate);
            this.props.actualizaFin(endDate);
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
          small
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  texto: state.Filtro.texto,
  inicio: state.Filtro.inicio,
  fin: state.Filtro.fin
});
const mapDispatchToProps = dispatch => ({
  func: texto => {
    dispatch(filtrarTexto({ texto }));
  },
  ordenarPor: texto => {
    if (texto === "fecha") {
      dispatch(filtrarPorFecha());
    } else if (texto === "monto") {
      dispatch(filtrarPorMonto());
    }
  },
  actualizaInicio: inicio => {
    dispatch(cambiarFechaInicio({ fecha: inicio }));
  },
  actualizaFin: fin => {
    dispatch(cambiarFechaFin({ fecha: fin }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltroTexto);
