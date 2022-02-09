import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../../components/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

    test('Debe mostrar el componente OK y match con snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe mostrar una lista de categorías', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });

});

