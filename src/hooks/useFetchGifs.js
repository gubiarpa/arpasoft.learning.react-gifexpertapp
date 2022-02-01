import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = (category) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    
    const gifs = getGifs(category)
      .then(images => {
        setState({
          data: images,
          loading: false
        });
      });

  }, [category]);

  return state;

}