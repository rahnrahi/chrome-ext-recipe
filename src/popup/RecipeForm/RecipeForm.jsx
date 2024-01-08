import karrowLeft from '../../assets/keyboard-arrow-left.svg'
import './RecipeForm.css';
import { API_URL, countries, difficulties } from '../constants';
import React from 'react';
import { recipeFormData } from '../constants';


function RecipeForm() {

  const [formData, setFormData] = React.useState(recipeFormData)
  const [isFormValid, setIsFormValid] = React.useState(false)

  React.useEffect(() => {
    const formFieldsVals = Object.keys(formData).map(fld => formData[fld])
    const emptyFields = formFieldsVals.filter(val => val === "")
    const isValid = emptyFields.length === 0
    setIsFormValid(isValid)
  }, [formData])

  const goBack = _ => {
    chrome.runtime.sendMessage(chrome.runtime.id, { type: 'NEWFORM', formstate: false })
  }
  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  const handleForm = async () => {
    let difficulty = parseInt(formData['difficulty'])
    difficulty = isNaN(difficulty) ? 1 : difficulty
    formData['difficulty'] = difficulty;
    setIsFormValid(false)
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setIsFormValid(true)
      if (response.status === 201) {
        chrome.storage.sync.set({ recipe: formData })
        chrome.runtime.sendMessage(chrome.runtime.id, { type: 'RECIPE', recipe: formData })
        chrome.runtime.sendMessage(chrome.runtime.id, { type: 'NEWFORM', formstate: false })
      }

    } catch (error) {
      setIsFormValid(true)
    }

  }

  return (<>
    <div id='heading' onClick={() => goBack()}>
      <img src={karrowLeft} /> Add new recipe
    </div>
    <hr />
    <div id='form-container'>
      <div className='flex-one-half'>
        <label>Name</label>
        <input type='text' value={formData.name} name='name' onChange={handleChange} />
      </div>
      <div className='flex-one-half select-wrapper'>
        <label>Country origin</label>
        <select value={formData.origin} onChange={handleChange} name="origin" id="origin">
          {countries.map((country, index) => (<option key={index} value={country.code}>{country.name}</option>))}
        </select>
      </div>
      <div className='flex-full'>
        <label>Description</label>
        <textarea rows={6} value={formData.description} maxLength={250} onChange={handleChange} name='description'></textarea>
        <span className='desc-info'>0/200 Characters</span>
      </div>
      <div className='flex-one-half select-wrapper'>
        <label>Difficulty</label>
        <select value={formData.difficulty} onChange={handleChange} name="difficulty" id="difficulty">
          {Object.keys(difficulties).map((index) => (<option key={index} value={index}>{difficulties[index]['text']}</option>))}
        </select>
      </div>
      <div className='flex-one-half'>
        <label>Protein</label>
        <input type='text' value={formData.protein} onChange={handleChange} name='protein' />
      </div>
      <div className='flex-one-half'>
        <label>Produce</label>
        <input type='text' value={formData.produce} onChange={handleChange} name='produce' />
      </div>
      <div className='flex-one-half'>
        <label>Spice</label>
        <input type='text' value={formData.spice} onChange={handleChange} name='spice' />
      </div>
      <div className='flex-one-half'>
        <label>Cooking Oil?</label>
        <input type='text' value={formData.cookingOil} onChange={handleChange} name='cookingOil' />
      </div>
      <div className='flex-one-half input-suffix'>
        <label>Volume</label>
        <input type='number' value={formData.volume} onChange={handleChange} maxLength={5} name='volume' />
        <p>grams</p>
      </div>
      <div className='flex-one-half input-suffix'>
        <label>Serves</label>
        <input type='number' value={formData.serves} onChange={handleChange} maxLength={5} name='serves' />
        <p>people</p>
      </div>
      <div className='flex-one-half select-wrapper'>
        <label>Authenticity</label>
        <select name="authenticity" value={formData.authenticity} onChange={handleChange} id="authenticity">
          <option value="Unverified">Unverified</option>
          <option value="Verified">Verified</option>
        </select>
      </div>
      <div className='flex-full'>
        <label>Stock</label>
        <input type='text' value={formData.stock} onChange={handleChange} name='stock' />
      </div>
      <div className='flex-full'>
        <button type='button'
          onClick={handleForm}
          disabled={!isFormValid} name='add-recipe' id='add-recipe' >Add Recipe</button>
      </div>
    </div>
  </>);
}

export default RecipeForm;
