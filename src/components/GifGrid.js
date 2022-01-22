import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/GetGifs';

export const GifGrid = ({category}) => {

  const [images, setImages] = useState([]);

  useEffect(async() => {
    const gifs = await getGifs(category);
    setImages(gifs);
  }, [category]);

  // useEffect(() => {
  //   getGifs(category)
  //     .then(setImages);
  // }, []);

  return (
    <div className="card-grid">
      <h3> {category} </h3>
        {
          images.map((images) =>
            <GifGridItem
              key={images.id}
              {...images}
            />
          )
        }
    </div>
  );
}