import { useState, useEffect } from 'react'
import React from 'react'
import './Popup.css'
import SearchBox from './searchbox/Searchbox'
import Recipedifficulty from './difficulty/Recipedifficulty'
import RecipeDetails from './details/RecipeDetails'
import RecipeForm from './RecipeForm/RecipeForm'
import { recipeFormData } from './constants'
import { RecipeType } from './types'

export const Popup = () => {
  const [curRecipe, setCurRecipe] = useState<RecipeType>({...recipeFormData})
  const [newForm, setNewForm] = useState<boolean>(false)


  useEffect(() => {
    chrome.storage.sync.get(['recipe'], (result) => {
      setCurRecipe(result.recipe || {})
    })
  }, [])

  useEffect(() => {
    chrome.runtime.onMessage.addListener(request => {
      if (request.type === 'RECIPE') {
        setCurRecipe(request?.recipe || {})
      }

      if (request.type === 'NEWFORM') {
        const formstate = request.formstate || false;
        setNewForm(formstate)
      }
    })
  }, [])

  if (newForm) {
    return (<main>
      <RecipeForm></RecipeForm>
    </main>)
  }

  return (
    <main>
      <SearchBox></SearchBox>
      <Recipedifficulty curRecipe={curRecipe}></Recipedifficulty>
      <RecipeDetails curRecipe={curRecipe}></RecipeDetails>
    </main>
  )
}

export default Popup
