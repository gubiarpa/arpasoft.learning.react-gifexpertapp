import React, { useState } from 'react';
import { AddCategory } from './AddCategory';

const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(
    [
      'One Punch Man',
      'Samurai X',
      'Saint Seiya',
      'Dragon Ball Z'
    ]
  );

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

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