import './RecipeDetails.css'

function RecipeDetails({ curRecipe }) {
  return (
    <div id="recipe-details">
      <div className='item'>
        <label htmlFor="">Protein</label>
        <span>{curRecipe?.protein}</span>
      </div>
      <div className='item'>
        <label htmlFor="">Spice Level</label>
        <span>{curRecipe?.spice}</span>
      </div>
      <div className='item'>
        <label htmlFor="">Spices</label>
        <span className='text-sunfire'>Saffron</span>
      </div>
      <div className='item'>
        <label htmlFor="">Cooking Oil</label>
        <span className='text-sunfire'>{curRecipe?.cookingOil}</span>
      </div>
      <div className='item'>
        <label htmlFor="">Volume/Weight</label>
        <span>{curRecipe?.volume}g</span>
      </div>
      <div className='item'>
        <label htmlFor="">Serves</label>
        <span>{curRecipe?.serves}</span>
      </div>
      <div className='item'>
        <label htmlFor="">Authenticity</label>
        <span className='text-sunfire'>{curRecipe?.authenticity}</span>
      </div>
      <div className='item'>
        <label htmlFor="">Stock</label>
        <span className='text-sunfire'>{curRecipe?.stock}</span>
      </div>
    </div>
  );
}

export default RecipeDetails;
