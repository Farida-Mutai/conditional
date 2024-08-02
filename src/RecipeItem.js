
import React from 'react';

function RecipeItem({ recipe }) {
  return (
    <li className="recipe-item">
      <p>{recipe}</p>
    </li>
  );
}

export default RecipeItem;
