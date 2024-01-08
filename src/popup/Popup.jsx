import { useState, useEffect } from 'react'

import './Popup.css'
import SearchBox from './searchbox/Searchbox'
import Recipedifficulty from './difficulty/Recipedifficulty'
import RecipeDetails from './details/RecipeDetails'

export const Popup = () => {
  const [curRecipe, setCurRecipe] = useState({})

  useEffect(() => {
    chrome.storage.sync.get(['recipe'], (result) => {
      setCurRecipe(result.recipe || {})
    })
  }, [])

  useEffect(() => {
    chrome.runtime.onMessage.addListener(recipe => {
      setCurRecipe(recipe || {})
    })

  }, [])

  return (
    <main>
      <SearchBox></SearchBox>
      <Recipedifficulty curRecipe={curRecipe}></Recipedifficulty>
      <RecipeDetails curRecipe={curRecipe}></RecipeDetails>
    </main>
  )
}

export default Popup
