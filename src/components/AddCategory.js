import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // evita comportamiento por default
    if (inputValue.trim().length > 2) {
      setCategories(categories => [inputValue, ...categories]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );

  AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired
  }

}