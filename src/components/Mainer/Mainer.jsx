import './Mainer.css'
import { useState } from 'react'
import Recipe from '../Recipe/Recipe.jsx'
import IngredientsList from '../IngredientsList/IngredientsList.jsx'
import { getRecipeFromMistral } from '../../ai.js'

export default function Mainer() {
  let [ingredientsList, setIngredientsList] = useState([])
  const [recipe, setRecipe] = useState('')

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient')
    setIngredientsList((prevIngredientsList) => [
      ...prevIngredientsList,
      newIngredient,
    ])
  }

  async function getRecipe() {
    const recipeContent = await getRecipeFromMistral(ingredientsList)
    console.log(recipeContent)
    setRecipe(recipeContent)
  }

  return (
    <main>
      <form className="searchForm" action={addIngredient}>
        <input type="text" placeholder="e.g. oregano" name="ingredient" />
        <button type="submit">+Add Ingredient</button>
      </form>

      {ingredientsList.length > 0 && (
        <IngredientsList
          ingredientsList={ingredientsList}
          getRecipe={getRecipe}
        />
      )}

      {recipe && <Recipe recipeContent={recipe} />}
    </main>
  )
}
