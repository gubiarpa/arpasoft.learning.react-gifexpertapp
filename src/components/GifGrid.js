import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async() => {
    const url = `https://api.giphy.com/v1/stickers/search?q=Dragon Ball Z&limit=10&api_key=PFVvhfL0JApPVrMjn6jA3a73AnLeedP8`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }))

    console.log(gifs);
    setImages(gifs);
  }


  return (
    <>
      <h3> {category} </h3>
        {
          images.map((images) =>
            <GifGridItem
              key={images.id}
              {...images}
            />
          )
        }
    </>
  );
}