import './Mainer.css'
import { useState } from 'react'

export default function Mainer() {
  let [ingredientsList, setIngredientsList] = useState([])

  const ingredientsListItems = ingredientsList.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ))

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient')
    setIngredientsList((prevIngredientsList) => [
      ...prevIngredientsList,
      newIngredient,
    ])
  }

  return (
    <main>
      <form className="searchForm" action={addIngredient}>
        <input type="text" placeholder="e.g. oregano" name="ingredient" />
        <button type="submit">+Add Ingredient</button>
      </form>

      {ingredientsList.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredientsList" aria-live="polite">
            {ingredientsListItems}
          </ul>
          {ingredientsList.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button>Get a recipe</button>
            </div>
          )}
        </section>
      )}
    </main>
  )
}
