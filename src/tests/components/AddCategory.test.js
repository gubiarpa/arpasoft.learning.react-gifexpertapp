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
  
  test('Debe llamar el setCategories y limpiar el textbox', () => {
    const value = 'Yeri';
    
    // 1. Simular el inputChange
    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });
    expect(wrapper.find('p').text().trim()).toBe(value);
    
    // 2. Simular el submit
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault() { } });    
    
    // 3. setCategories se debe haber llamado
    expect(setCategories).toHaveBeenCalled();
    
    // 4. El valor del input debe estar vacío
    expect(wrapper.find('input').prop('value')).toBe('');
  });

});