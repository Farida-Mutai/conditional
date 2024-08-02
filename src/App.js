
import React, { useState } from 'react';
import CategorySelector from './CategorySelector';
import RecipeList from './RecipeList';
import NoRecipes from './NoRecipes';
import './App.css';

function App() {
  const [category, setCategory] = useState('breakfast');

  const recipes = {
    breakfast: ['Pancakes', 'Waffles', 'Omelette'],
    lunch: ['Grilled Cheese', 'Caesar Salad', 'Chicken Wrap'],
    dinner: ['Spaghetti ', 'Chicken Stir-fry', 'Beef Tacos'],
    dessert: ['Chocolate Cake', 'Apple Pie', 'Ice Cream']
  };

  return (
    <div className="app-container">
      <CategorySelector setCategory={setCategory} />
      {recipes[category].length > 0 ? (
        <RecipeList recipes={recipes[category]} />
      ) : (
        <NoRecipes />
      )}
    </div>
  );
}

export default App;

