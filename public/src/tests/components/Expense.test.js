import expenses from "../fixtures/expenses";
import { shallow } from "enzyme";
import { Expense } from "../../components/Expense"
import React from "react";


describe('Expense', () => {
    test('Snapshot expense vacio', () => {
        const wrapper = shallow(<Expense />)
        expect(wrapper).toMatchSnapshot();
    });
    test('Snapshot expense ', () => {
        const wrapper = shallow(<Expense {...expenses[0]}/>)
        expect(wrapper).toMatchSnapshot();
    });
});