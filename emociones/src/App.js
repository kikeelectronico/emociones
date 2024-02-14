import React, {useState, useEffect} from "react";
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import DeselectIcon from '@mui/icons-material/Deselect';

import './App.css';
import Emotion from './components/Emotion';
import Footer from "./components/Footer";

let emotions_list = require("./emotions.json")

function App() {

  const [emotions, setEmotions] = useState([])
  const [filtered, setFiltered] = useState(null)

  useEffect(() => {
    let local_emotions = localStorage.getItem("emotions")
    setEmotions(local_emotions ? JSON.parse(local_emotions) : emotions_list)
  }, [])

  useEffect(() => {
    let local_filtered = localStorage.getItem("filtered")
    setFiltered(local_filtered === "true")
  }, [])

  useEffect(() => {
    if (emotions.length > 0)
      localStorage.setItem("emotions", JSON.stringify(emotions))
  }, [emotions])

  useEffect(() => {
    if (filtered !== null)
      localStorage.setItem("filtered", filtered)
  }, [filtered])

  const selectEmotion = (emotion) => {
    let _emotions = [...emotions]
    for(let i = 0; i < _emotions.length; i++) {
      if (_emotions[i].name === emotion.name) {
        _emotions[i].selected = !_emotions[i].selected
        setEmotions(_emotions)
        break
      }
    }
  }

  const unselectAll = () => {
    let _emotions = [...emotions]
    for(let i = 0; i < _emotions.length; i++) {
      _emotions[i].selected = false
    }
    setEmotions(_emotions)
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
              <>
                {
                  !filtered || (filtered && emotion.selected) ?
                    <Emotion 
                      emotion={emotion}
                      key={emotion.name}
                      select={selectEmotion}
                    />
                  : <></>
                }
              </>
            )
          })
        }
      </section>    
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
          onClick={() => unselectAll()}
        >
          <DeselectIcon/>
        </IconButton>
      </section>
      {
        !filtered ? <Footer/> : <></>
      }
    </div>
  );
}

export default App;
