import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  
  beforeEach(() => {
    jest.clearAllMocks(); // limpia simulaciones
    wrapper = shallow(<AddCategory setCategories={setCategories} />);    
  });

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';

    input.simulate('change', { target: { value } });
    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('No debe postear submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

});