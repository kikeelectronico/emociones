import React, {useState, useEffect} from "react";
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import DeselectIcon from '@mui/icons-material/Deselect';

import './App.css';
import Emotion from './components/Emotion';

let emotions_list = require("./emotions.json")

function App() {

  const [emotions, setEmotions] = useState([])
  const [selected_emotions, setSelectedEmotions] = useState([])
  const [filtered, setFiltered] = useState(false)

  useEffect(() => {
    setEmotions(filtered ? selected_emotions : emotions_list)
  }, [emotions_list, selected_emotions, filtered])

  const selectEmotion = (emotion) => {
    let _selected_emotions = [...selected_emotions]
    if (!_selected_emotions.includes(emotion)) {
      _selected_emotions.push(emotion)
    } else {
      let index = _selected_emotions.indexOf(emotion)
      _selected_emotions.splice(index, 1)
    }
    setSelectedEmotions(_selected_emotions)
  }

  return (
    <div className="App">
      <header className="header">
       <h1>Emociones</h1>
      </header>
      <section className="emotions">
        {
          emotions.map(emotion => {
            return (
              <Emotion 
                emotion={emotion}
                selected={selected_emotions.includes(emotion)}
                key={emotion.name}
                select={selectEmotion}
              />
            )
          })
        }
      </section>    
      {
        selected_emotions.length > 0 ?
          <section className="buttons">   
            <IconButton
              aria-label="Mostrar emociones seleccionadas"
              onClick={() => setFiltered(!filtered)}
            >
              {
                !filtered ? <FilterListIcon className="iconButton"/> : <FilterListOffIcon  className="iconButton"/>
              }
            </IconButton>    
            <IconButton
              aria-label="Deseleccinar todas"
              onClick={() => setSelectedEmotions([])}
            >
              <DeselectIcon/>
            </IconButton>
          </section>
        : <></>
      }
    </div>
  );
}

export default App;
