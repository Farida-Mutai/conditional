
import React from 'react';
import RecipeItem from './RecipeItem';

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <RecipeItem key={index} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
