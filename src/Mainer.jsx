import './Mainer.css'
import { useState } from 'react'

export default function Mainer() {
  let [ingredientsList, setIngredientsList] = useState([])

  const ingredientsListItems = ingredientsList.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ))

  function formSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get('ingredient')
    setIngredientsList((prevIngredientsList) => [
      ...prevIngredientsList,
      newIngredient,
    ])
  }

  return (
    <main>
      <form className="searchForm" onSubmit={formSubmit}>
        <input type="text" placeholder="e.g. oregano" name="ingredient" />
        <button type="submit">+ Add Ingredient</button>
      </form>

      <ul className="ingredientsList">{ingredientsListItems}</ul>
    </main>
  )
}
