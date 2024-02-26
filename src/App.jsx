
import './App.css'
import BtnPhrase from './components/BtnPhrase';
import PhraseCard from './components/PhraseCard';
import getRandomFromArray from './utils/getRandomFromArray'
import phrases from './utils/phrases.json'
import { useState } from 'react';
import arrImages from './utils/arrimages.json'
function App() {
  const initialValue = getRandomFromArray(phrases);
  const [phraseRandom, setPhraseRandom] = useState(initialValue)
  const initialImage = getRandomFromArray(arrImages)
   const [imageSelected, setImageSelected] = useState(1)
  const objStyle = {
    backgroundImage: `url(/fondo${imageSelected}.png)`
  }


  return (
   
      <div className= 'app'style={objStyle}>
        <h1 className='app__title'>Galleta de la Fortuna</h1>
        <article className='app__card'>
        <PhraseCard phraseRandom={phraseRandom}/>
        <BtnPhrase setImageSelected={setImageSelected}
                  setPhraseRandom={setPhraseRandom} 
         />
        </article>
      
      </div>
  )
}

export default App
