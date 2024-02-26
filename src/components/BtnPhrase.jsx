import getRandomFromArray from "../utils/getRandomFromArray";
import phrases from "../utils/phrases.json"
import arrImages from '../utils/arrimages.json'
import './styles/BtnPhrase.css'

const BtnPhrase = ({setPhraseRandom, setImageSelected}) => {

    const handleClick = () =>{
        const initialValue = getRandomFromArray(phrases);
        setPhraseRandom(initialValue)
        
        const background = getRandomFromArray(arrImages)
        setImageSelected(background)
    }
    
    return (
      <button className="card__btn" onClick={handleClick}>
        Probar mi suerte
      </button>
    )
  }
  
  export default BtnPhrase