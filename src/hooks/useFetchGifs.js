import { useState } from 'react';

export const useFetchGifs = () => {

  const [state, setState] = useState({
    data: [],
    loading: true
  });

  setTimeout(() => {
    setState({
      data: [2, 9, 0, 7],
      loading: false
    });
  }, 3000);

  return state;

}