import './Mainer.css'
import { useState, useRef, useEffect } from 'react'
import Recipe from '../Recipe/Recipe.jsx'
import IngredientsList from '../IngredientsList/IngredientsList.jsx'
import { getRecipeFromMistral } from '../../ai.js'

export default function Mainer() {
  let [ingredientsList, setIngredientsList] = useState([])
  const [recipe, setRecipe] = useState('')
  const recipeSection = useRef(null)

  useEffect(() => {
    if (recipe !== '' && recipeSection.current !== null) {
      const offset = 10 //10 pikseli wyzej
      const elementPosition =
        recipeSection.current.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      })
    }
  }, [recipe])

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
          ref={recipeSection}
          ingredientsList={ingredientsList}
          getRecipe={getRecipe}
        />
      )}

      {recipe && <Recipe recipeContent={recipe} />}
    </main>
  )
}
