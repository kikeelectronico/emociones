import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';

import './App.css';
import Emotion from './components/Emotion';

let emotions = require("./emotions.json")

function App() {

  const [selected, setSelected] = useState([])
  const [filtered, setFiltered] = useState(false)

  const selectEmotion = (emotion) => {
    let _selected = [...selected]
    if (!_selected.includes(emotion)) {
      _selected.push(emotion)
    } else {
      let index = _selected.indexOf(emotion)
      _selected.splice(index, 1)
    }
    setSelected(_selected)
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
                selected={selected.includes(emotion)}
                key={emotion.name}
                select={selectEmotion}
              />
            )
          })
        }
      </section>
      <section className="buttons">
        <IconButton
          color="primary"
          aria-label="Mostrar emociones seleccionadas"
          onClick={() => setFiltered(!filtered)}
        >
          {
            !filtered ? <FilterListIcon/> : <FilterListOffIcon/>
          }
        </IconButton>
      </section>
    </div>
  );
}

export default App;
