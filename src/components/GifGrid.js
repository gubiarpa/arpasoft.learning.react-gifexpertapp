import React from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

  // const [images, setImages] = useState([]);
  const {loading} = useFetchGifs();
  console.log(loading);

  // useEffect(async() => {
  //   const gifs = await getGifs(category);
  //   setImages(gifs);
  // }, [category]);

  return (
    <div className="card-grid">
      <h3> {category} </h3>
      { loading ? 'Cargando...' : 'Data Cargada' }
        {
          // images.map((images) =>
          //   <GifGridItem
          //     key={images.id}
          //     {...images}
          //   />
          // )
        }
    </div>
  );
}