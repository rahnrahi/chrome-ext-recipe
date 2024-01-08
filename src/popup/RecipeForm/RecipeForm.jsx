import karrowLeft from '../../assets/keyboard-arrow-left.svg'
import './RecipeForm.css';
import { countries } from '../constants';

function RecipeForm() {
  const goBack = _ =>{
    chrome.runtime.sendMessage(chrome.runtime.id,{ type: 'NEWFORM', formstate: false })
  }

  return (<>
    <div id='heading' onClick={()=>goBack()}>
      <img src={karrowLeft} /> Add new recipe
    </div>
    <hr />
    <div id='form-container'>
      <div className='flex-one-half'>
        <label>Name</label>
        <input type='text' name='name' />
      </div>
      <div className='flex-one-half select-wrapper'>
        <label>Country origin</label>
        <select name="country" id="country">
          {countries.map(country=>(<option value={country.code}>{country.name}</option>))}
        </select>
      </div>
      <div className='flex-full'>
        <label>Description</label>
        <textarea rows={6} cols={8} name='description'></textarea>
        <span>0/200 Characters</span>
      </div>
      <div className='flex-one-half'>
        <label>Difficulty</label>
        <input type='text' name='difficulty' />
      </div>
      <div className='flex-one-half'>
        <label>Protein</label>
        <input type='text' name='protein' />
      </div>
      <div className='flex-one-half'>
        <label>Produce</label>
        <input type='text' name='produce' />
      </div>
      <div className='flex-one-half'>
        <label>Spice</label>
        <input type='text' name='spice' />
      </div>
      <div className='flex-one-half'>
        <label>Cooking Oil?</label>
        <input type='text' name='cookingOil' />
      </div>
      <div className='flex-one-half input-suffix'>
        <label>Volume</label>
        <input type='text' maxLength={5} name='volume' />
        <p>grams</p>
      </div>
      <div className='flex-one-half input-suffix'>
        <label>Serves</label>
        <input type='text' maxLength={5} name='serves' />
        <p>people</p>
      </div>
      <div className='flex-one-half select-wrapper'>
        <label>Authenticity</label>
        <select name="authenticity" id="authenticity">
           <option value="Unverified">Unverified</option>
           <option value="Verified">Verified</option>
        </select>
      </div>
      <div className='flex-full'>
        <label>Stock</label>
        <input type='text' name='stock' />
      </div>
      <div className='flex-full'>
        <button type='button' name='add-recipe' id='add-recipe' >Add Recipe</button>
      </div>
    </div>
  </>);
}

export default RecipeForm;
