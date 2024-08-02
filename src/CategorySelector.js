
import React from 'react';

function CategorySelector({ setCategory }) {
  return (
    <div className="category-selector">
      <h1>Select a Category</h1>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="dessert">Dessert</option>
      </select>
    </div>
  );
}

export default CategorySelector;
