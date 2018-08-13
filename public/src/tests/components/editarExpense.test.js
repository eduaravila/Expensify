import React from "react";
import { shallow } from "enzyme";
import { EditarExpense } from "../../components/EditarExpense";
import expenses from "../fixtures/expenses";
import FormularioExpense from "../../components/FormularioExpense";

let guardar, history, wrapper, eliminar;

beforeEach(() => {
  guardar = jest.fn();
  history = { push: jest.fn() };
  eliminar = jest.fn();
  wrapper = shallow(
    <EditarExpense expense={expenses[0]} history={history} guardar={guardar} eliminar={eliminar} />
  );
});
describe("Editar expenses", () => {
  test("Guardar expense", () => {
    wrapper.find(FormularioExpense).prop("guardar")(expenses[1]);

    expect(guardar).toHaveBeenCalledWith(expenses[1]);
  });
  test("eliminar expense", () => {
    wrapper.find("button").simulate("click");
    expect(eliminar).toHaveBeenCalled();
  });
  test('Ser el mismo expense', () => {
      expect(wrapper.find(FormularioExpense).prop('expense')).toBe(expenses[0])
  });
});
