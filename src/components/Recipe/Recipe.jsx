import React from 'react'
import './Recipe.css'
import Markdown from 'react-markdown'

export default function Recipe(props) {
  const markdown = props.recipeContent
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Claude Recommends:</h2>
      <Markdown>{markdown}</Markdown>
    </section>
  )
}
