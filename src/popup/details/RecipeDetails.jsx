import './RecipeDetails.css'
import paella from '../../assets/paella.svg'

function RecipeDetails() {
  return (
    <div id="recipe-details">
      <div className='item'>
        <label htmlFor="">Protein</label>
        <span>Jumbo Shrimp</span>
      </div>
      <div className='item'>
        <label htmlFor="">Spice Level</label>
        <span>Hot</span>
      </div>
      <div className='item'>
        <label htmlFor="">Spices</label>
        <span className='text-sunfire'>Saffron</span>
      </div>
      <div className='item'>
        <label htmlFor="">Cooking Oil</label>
        <span className='text-sunfire'>Spanish Olive Oil</span>
      </div>
      <div className='item'>
        <label htmlFor="">Volume/Weight</label>
        <span>700g</span>
      </div>
      <div className='item'>
        <label htmlFor="">Serves</label>
        <span>4</span>
      </div>
      <div className='item'>
        <label htmlFor="">Authenticity</label>
        <span className='text-sunfire'>Unverified</span>
      </div>
      <div className='item'>
        <label htmlFor="">Stock</label>
        <span className='text-sunfire'>Chicken</span>
      </div>
    </div>
  );
}

export default RecipeDetails;
