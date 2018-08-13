import expenses from "../fixtures/expenses";
import { shallow } from "enzyme";
import { ListaExpenses } from "../../components/listaExpense";
import React from "react";

describe("Lista sin propiedades", () => {
  test("Listado con propiedades", () => {
    const wrapper = shallow(<ListaExpenses />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Listado con propiedades', () => {
    const wrapper = shallow(<ListaExpenses todos={expenses}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
