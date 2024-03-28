import React, {useState, useEffect} from "react";
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';

import './App.css';
import Header from "./components/Header";
import Emotion from './components/Emotion';
import Footer from "./components/Footer";

let local_emotions = localStorage.getItem("emotions")
let emotions_list = require("./emotions.json")
let emotions = local_emotions ? JSON.parse(local_emotions) : emotions_list

function App() {

  const [filtered, setFiltered] = useState(null)

  useEffect(() => {
    let local_filtered = localStorage.getItem("filtered")
    setFiltered(local_filtered === "true")
  }, [])

  useEffect(() => {
    if (filtered !== null)
      localStorage.setItem("filtered", filtered)
  }, [filtered])

  const updateEmotion = (emotion) => {
    for(let i = 0; i < emotions.length; i++) {
      if (emotions[i].name === emotion.name) {
        emotions[i] = emotion
        break
      }
    }
    localStorage.setItem("emotions", JSON.stringify(emotions))
  }

  return (
    <div className="App">
      <Header/>
      <section className="emotions">
        {
          emotions.map(emotion => {
            return (
              <Emotion 
                emotion={emotion}
                key={emotion.name}
                filtered={filtered}
                updateEmotion={updateEmotion}
              />
            )
          })
        }
      </section>
      <section className="spacer">
        
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
      </section>
      <Footer/> 
    </div>
  );
}

export default App;
