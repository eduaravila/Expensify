import {shallow} from 'enzyme';
import Header from '../../components/Header';
import React from 'react'

describe('COMPONETS header', () => {
    test('header', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper).toMatchSnapshot()
    });
});