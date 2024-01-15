import karrowLeft from '../../assets/keyboard-arrow-left.svg'
import './RecipeForm.scss';
import { API_URL, countries, difficulties } from '../constants';
import React from 'react';
import { recipeFormData } from '../constants';
import { DifficultiesType, RecipeType } from '../types';


const RecipeForm = (): React.ReactElement=> {

  const [formData, setFormData] = React.useState<RecipeType>(recipeFormData)
  const [isFormValid, setIsFormValid] = React.useState<boolean>(false)
  const [descCount, setDescCount] = React.useState<number>(0)

  React.useEffect(() => {
    const formFieldsVals = Object.keys(formData).map((fld) => formData[fld as keyof RecipeType])
    const emptyFields = formFieldsVals.filter(val => val === "")
    const isValid = emptyFields.length === 0
    setIsFormValid(isValid)
  }, [formData])

  React.useEffect(() => {
    const desclength = formData.description.length;
    setDescCount(desclength)
  }, [formData.description])

  const goBack = () => {
    chrome.runtime.sendMessage(chrome.runtime.id, { type: 'NEWFORM', formstate: false })
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  const handleForm = async () => {
    let difficulty = parseInt(String(formData['difficulty']))
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
    <div id='heading' className='flex text-white justify-start items-start font-bold text-lg cursor-pointer' onClick={() => goBack()}>
      <img src={karrowLeft} /> Add new recipe
    </div>
    <hr className='border-solid border-1 w-full'/>
    <div id='form-container' className='flex self-stretch text-white flex-row flex-wrap gap-6'>
      <div className='flex-one-half flex flex-col'>
        <label className='text-[1rem] pb-[0.625rem] font-medium'>Name</label>
        <input className='px-2 py-[.6875rem] border-none rounded-md leading-6 font-normal not-italic' type='text' value={formData.name} name='name' onChange={handleChange} />
      </div>
      <div className='flex-one-half flex flex-col select-wrapper relative'>
        <label className='text-[1rem] pb-[0.625rem] font-medium'>Country origin</label>
        <select className='pl-2 text-[.9rem] py-[.6875rem] border-none rounded-md leading-6  font-normal not-italic' value={formData.origin} onChange={handleChange} name="origin" id="origin">
          {countries.map((country, index) => (<option key={index} value={country.code}>{country.name}</option>))}
        </select>
      </div>
      <div className='w-full flex flex-col'>
        <label className='text-[1rem] pb-[0.625rem] font-medium'>Description</label>
        <textarea className='px-2 py-[.6875rem] border-none rounded-md' rows={6} value={formData.description} maxLength={200} onChange={handleChange} name='description'></textarea>
        <span className='desc-info'>{descCount}/200 Characters</span>
      </div>
      <div className='flex-one-half flex flex-col select-wrapper relative'>
        <label className='text-[1rem] pb-[0.625rem] font-medium'>Difficulty</label>
        <select className='text-[.9rem] px-2 py-[.6875rem] border-none rounded-md leading-6  font-normal not-italic' value={formData.difficulty} onChange={handleChange} name="difficulty" id="difficulty">
          {Object.keys(difficulties).map((index) => (<option key={index} value={index}>
            {difficulties[index as keyof DifficultiesType]['text']}
            </option>))
          }
        </select>
      </div>
      <div className='flex-one-half flex flex-col'>
        <label className='text-[1rem] pb-[0.625rem] font-medium'>Protein</label>
        <input className='px-2 py-[.6875rem] border-none rounded-md leading-6  font-normal not-italic' type='text' value={formData.protein} onChange={handleChange} name='protein' />
      </div>
      <div className='flex-one-half flex flex-col'>
        <label className='text-[1rem] pb-[0.625rem] font-medium'>Produce</label>
        <input className='px-2 py-[.6875rem] border-none rounded-md leading-6  font-normal not-italic' type='text' value={formData.produce} onChange={handleChange} name='produce' />
      </div>
      <div className='flex-one-half flex flex-col'>
        <label className='text-[1rem] pb-[0.625rem] font-medium'>Spice</label>
        <input className='px-2 py-[.6875rem] border-none rounded-md leading-6  font-normal not-italic' type='text' value={formData.spice} onChange={handleChange} name='spice' />
      </div>
      <div className='flex-one-half flex flex-col'>
        <label className='text-[1rem] pb-[0.625rem] font-medium'>Cooking Oil?</label>
        <input className='px-2 py-[.6875rem] border-none rounded-md leading-6  font-normal not-italic' type='text' value={formData.cookingOil} onChange={handleChange} name='cookingOil' />
      </div>
      <div className='flex-one-half flex flex-col input-suffix relative'>
        <label className='text-[1rem] pb-[0.625rem] font-medium'>Volume</label>
        <input  className='px-2 py-[.6875rem] border-none rounded-md leading-6  font-normal not-italic' type='number' value={formData.volume} onChange={handleChange} maxLength={5} name='volume' />
        <p className='top-[2.5rem] right-[0.6875rem] absolute not-italic font-light'>grams</p>
      </div>
      <div className='flex-one-half flex flex-col input-suffix relative'>
        <label className='text-[1rem] pb-[0.625rem] font-medium'>Serves</label>
        <input className='px-2 py-[.6875rem] border-none rounded-md leading-6  font-normal not-italic' type='number' value={formData.serves} onChange={handleChange} maxLength={5} name='serves' />
        <p className='top-[2.5rem] right-[0.6875rem] absolute not-italic font-light'>people</p>
      </div>
      <div className='flex-one-half flex flex-col select-wrapper relative'>
        <label className='text-[1rem] pb-[0.625rem] font-medium'>Authenticity</label>
        <select className='text-[.9rem] px-2 py-[.6875rem] border-none rounded-md leading-6  font-normal not-italic' name="authenticity" value={formData.authenticity} onChange={handleChange} id="authenticity">
          <option value="Unverified">Unverified</option>
          <option value="Verified">Verified</option>
        </select>
      </div>
      <div className='w-full flex flex-col'>
        <label className='text-[1rem] pb-[0.625rem] font-medium'>Stock</label>
        <input className='px-2 py-[.6875rem] border-none rounded-md leading-6  font-normal not-italic' type='text' value={formData.stock} onChange={handleChange} name='stock' />
      </div>
      <div className='w-full flex flex-col'>
        <button type='button'
          onClick={handleForm}
          disabled={!isFormValid} className='rounded-md disabled:opacity-50 text-white border-none cursor-pointer pr-[.6875rem] px-[.5625rem] py-[.875rem]' name='add-recipe' id='add-recipe' >Add Recipe</button>
      </div>
    </div>
  </>);
}

export default RecipeForm;
