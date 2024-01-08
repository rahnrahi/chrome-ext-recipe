import React from 'react';
import './SearchResults.css'
import spain1 from '../../assets/spain1.png'
import {difficulties} from '../constants'

function SearchResults({ recipes }) {

  const [isOpen, setIsopen] = React.useState(false);

  React.useEffect(()=>{
    setIsopen(true)
  }, [recipes])

  if (recipes.length == 0 || !isOpen) {
    return <></>
  }

  const selectedRecipe = recipe =>{
     chrome.storage.sync.set({ recipe })
     chrome.runtime.sendMessage(chrome.runtime.id,{ type: 'RECIPE', recipe })
     setIsopen(false);
  }


  return (
    <div id="search-results">
      {recipes.map((recipe, key) => {
        var difficulty = difficulties[recipe['difficulty']]
        return (
          <div className="search-item" onClick={()=>selectedRecipe(recipe)} key={key}>
            <div className="recipe-title">
              <img width={24} src={spain1} />
              {recipe.name}
            </div>
            <div className='search-other-info'>
              <div className="recipe-diff">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M0 12V0H12V5.5L5.5 12H0Z" fill={difficulty.color} />
                </svg>
                <span>{difficulty.text}</span>
              </div>
              <span className='devider'>&nbsp;</span>
              <div className="recipe-time">{recipe.produce}min</div>
            </div>
          </div>
        )
      })

      }


    </div>
  );
}

export default SearchResults;
