import React from "react";
import { shallow } from "enzyme";
import { AgregarNuevo } from "../../components/AgregarNuevo";
import expenses from "../fixtures/expenses";
import FormularioExpense from "../../components/FormularioExpense";
let guardar, history, wrapper;

beforeEach(() => {
  guardar = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AgregarNuevo history={history} guardar={guardar} />);
});
describe("Agregar nuevo expense COMPONENTE", () => {
  test("Ejecutar guardar props", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Guardar y redireccionar", () => {
    wrapper.find(FormularioExpense).prop("guardar")(expenses[2]);

    expect(guardar).toHaveBeenCalledWith(expenses[2]);
  });
});
