import React from 'react'
import {shallow} from 'enzyme'
import {Nav} from '../../components/Nav';

describe('Nav component', () => {
    test('Nav', () => {
        const wrapper = shallow(<Nav />);

        expect(wrapper).toMatchSnapshot();
        
    });
});