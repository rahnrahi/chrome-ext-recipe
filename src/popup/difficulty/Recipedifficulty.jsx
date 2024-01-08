import { useEffect, useState } from 'react'
import './Recipedifficulty.css'
import spain1 from '../../assets/spain1.png'
import arrow from '../../assets/arrow.png'
import twitter from '../../assets/twitter.png'
import micon from '../../assets/m.png'
import paella from '../../assets/paella.svg'

function Recipedifficulty({curRecipe}) {
  curRecipe = curRecipe || {}

  return (<>
    <div id="recipe-heading">
      <div className='info'>
        <img width={24} src={spain1} />
        <span className="recipe-name">{curRecipe.name}</span>
      </div>
      <div className='actions'>
        <span className="social-icons">
          <img src={twitter} />
          <img src={arrow} />
          <img src={micon} />
        </span>
        <button className="recipe-btn">+Add recipe</button>
      </div>
    </div>
    <div id="recipe-difficulty">
      <div className="difficulty">
        <span className="difficulty-icon"><img width={32} src={paella} /></span>
        <span className="difficulty-type">Difficulty: Medium</span>
      </div>
      <div className='recipe-text'>
         {curRecipe.description}
      </div>
    </div>
  </>);
}

export default Recipedifficulty;
