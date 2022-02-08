import React from 'react';
import '@testing-library/jest-dom';
import { GifGrid } from "../../components/GifGrid";
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('Debe mostrar el componente correcto y hacer match con el snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot(); 
    });
    
    test('Debe mostrar items cuando se cargan imágenes', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https//localhost/cualquiera/huevada.jpg',
            title: 'Cualquier Huevada'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={ category } />);
        expect(wrapper).toMatchSnapshot(); 
    });
    
    test('Debe mostrar items cuando se cargan imágenes useFetchGifs', () => {
        const gifs = [];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot(); 
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });

});