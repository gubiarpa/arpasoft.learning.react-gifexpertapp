import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

  test('Debe mostrar <GifGridItem /> correctamente', () => {
    const title = 'Saitama Sensei';
    const url = 'https://media0.giphy.com/media/Y3rwoQDYUOQBKF51Kw/giphy.gif?cid=9a21f0474a1u0ciz9b9isalrnop97x7oxtebvbpvr40htw7s&rid=giphy.gif&ct=s';
    // const wrapper = shallow(<GifGridItem />);
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });

});