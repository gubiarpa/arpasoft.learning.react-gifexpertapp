import React, { useState } from 'react';

const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(
    [
      'One Punch Man',
      'Samurai X',
      'Saint Seiya',
      'Dragon Ball Z'
    ]
  );

  const handleAdd = () => {
    setCategories([...categories, 'Pokemon']);
  }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <button onClick={handleAdd}>Agregar</button>

      <ol>
        {
          categories.map( category => {
            return <li key={ category }> { category }</li>;
          })
        }
      </ol>
    </>
  );
}

export default GifExpertApp;