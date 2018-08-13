import React from "react";
import "react-dates/initialize";

import { shallow } from "enzyme";
import { SingleDatePicker } from "react-dates";

import FormularioExpense from "../../components/FormularioExpense";
import expenses from "../fixtures/expenses";
import moment from "moment";

describe("Componente Formulario expense", () => {
  test("Formulario expense", () => {
    const wrapper = shallow(<FormularioExpense />);
    expect(wrapper).toMatchSnapshot();
  });
  test("Formulario expense con expense", () => {
    const wrapper = shallow(<FormularioExpense expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("Error en los input por no tener valores asignados", () => {
    const wrapper = shallow(<FormularioExpense />);

    wrapper.find("form").simulate("submit", {
      preventDefault: () => {}
    });
    expect(wrapper.state("error")).toBe("CAMPOS OBLIGATORIOS!");
  });

  test("Modificar el nombre", () => {
    let value = "gg izi";
    const wrapper = shallow(<FormularioExpense />);

    wrapper
      .find("input")
      .at(0)
      .simulate("change", {
        target: { value }
      });
    expect(wrapper.state("nombre")).toBe(value);
  });
  test("Descripcion de textarea debe de cambiar", () => {
    let value = "gg izi";

    const wrapper = shallow(<FormularioExpense />);

    wrapper.find("textarea").simulate("change", {
      target: { value }
    });
    expect(wrapper.state("descripcion")).toEqual(value);
  });

  test("Monto debe de cambiar", () => {
    let value = 111.43;
    const wrapper = shallow(<FormularioExpense />);
    wrapper.debug();
    wrapper
      .find("input")
      .at(1)
      .simulate("change", {
        target: { value }
      });

    expect(wrapper.state("monto")).toEqual(value);
  });
  test("Cambiar la fecha", () => {
    let ahora = moment();
    const wrapper = shallow(<FormularioExpense />);
    wrapper.find(SingleDatePicker).prop("onDateChange")(ahora);

    expect(wrapper.state("creadoEl")).toBe(ahora);
  });

  test("Guardar el nuevo expense", () => {
    const func = jest.fn();
    const wrapper = shallow(
      <FormularioExpense expense={expenses[0]} guardar={func} />
    );

    wrapper.find("form").simulate("submit", {
      preventDefault: () => {}
    });
    expect(func).toHaveBeenCalledWith({
      nombre: expenses[0].nombre,
      monto: expenses[0].monto,
      creadoEl: expenses[0].creadoEl.valueOf(),
      descripcion: expenses[0].descripcion
    });
  });
  test("on Focus change", () => {
    let ahora = true;
    const wrapper = shallow(<FormularioExpense />);
    wrapper.find(SingleDatePicker).prop("onFocusChange")({ focused:ahora });

    expect(wrapper.state("calendarFocus")).toBe(ahora);
  });
});
