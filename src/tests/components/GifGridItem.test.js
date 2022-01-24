import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

  const title = 'Saitama Sensei';
  const url = 'https://media0.giphy.com/media/Y3rwoQDYUOQBKF51Kw/giphy.gif?cid=9a21f0474a1u0ciz9b9isalrnop97x7oxtebvbpvr40htw7s&rid=giphy.gif&ct=s';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('Debe mostrar <GifGridItem /> correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe tener un párrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('Debe tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('Debe tener la clase animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className).toContain('animate__fadeIn');
  });

});