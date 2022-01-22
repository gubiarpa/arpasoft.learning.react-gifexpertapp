import React from 'react';

export const GifGridItem = ({title, url}) => {
  return (
    <div className="card animate__animated animate__fadeInUp">
      <img src={url} alt={title} className="animate__animated animate__fadeInUp" />
      <p>{title}</p>
    </div>
  );
}