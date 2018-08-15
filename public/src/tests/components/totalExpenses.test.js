import React from "react";
import { SumaTotal } from "../../components/totalExpenses";
import { shallow } from "enzyme";

let wrapper, tamaño, total;
beforeEach(() => {
  total = 100;
  tamaño = 9;
  wrapper = shallow(<SumaTotal tamaño={tamaño} total={total} />);
});
describe("Sumar expenses filtrados", () => {
  test("Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
