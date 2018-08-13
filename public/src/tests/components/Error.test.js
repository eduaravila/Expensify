import React from 'react'
import {shallow} from 'enzyme'
import {Error} from '../../components/Error';

describe('Error componente', () => {
    test('Error', () => {
        const wrapper = shallow(<Error />);
        expect(wrapper).toMatchSnapshot();
    });
});