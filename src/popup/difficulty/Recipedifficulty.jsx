import './Recipedifficulty.css'
import spain1 from '../../assets/spain1.png'
import arrow from '../../assets/arrow.png'
import twitter from '../../assets/twitter.png'
import micon from '../../assets/m.png'
import paella from '../../assets/paella.svg'
import { difficulties } from '../constants'

function Recipedifficulty({curRecipe}) {
  const difficultyType = curRecipe?.difficulty || 1;
  const difficulty = difficulties[difficultyType]
  const addRecipe = _ =>{
    chrome.runtime.sendMessage(chrome.runtime.id,{ type: 'NEWFORM', formstate: true })
  }

  return (<>
    <div id="recipe-heading">
      <div className='info'>
        <img width={24} src={spain1} />
        <span className="recipe-name">{curRecipe?.name}</span>
      </div>
      <div className='actions'>
        <span className="social-icons">
          <img src={twitter} />
          <img src={arrow} />
          <img src={micon} />
        </span>
        <button onClick={()=>addRecipe()} className="recipe-btn">+Add recipe</button>
      </div>
    </div>
    <div id="recipe-difficulty">
      <div className="difficulty">
        <span className="difficulty-icon"><img width={32} src={paella} /></span>
        <span className="difficulty-type">Difficulty: {difficulty?.text}</span>
      </div>
      <div className='recipe-text'>
         {curRecipe?.description}
      </div>
    </div>
  </>);
}

export default Recipedifficulty;
