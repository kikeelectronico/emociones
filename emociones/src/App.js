import React, {useState, useEffect} from "react";
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

import './App.css';
import Header from "./components/Header";
import Emotion from './components/Emotion';
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import AddEmotion from "./components/AddEmotion";

let local_emotions = localStorage.getItem("emotions")
let emotions_list = require("./emotions.json")
let emotions = local_emotions ? JSON.parse(local_emotions) : emotions_list

function App() {

  const [filtered, setFiltered] = useState(null)
  const [selected, setSelected] = useState(0)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    let _selected = 0
    for(let i = 0; i < emotions.length; i++) {
      if (emotions[i].selected) {
        _selected += 1 
      }
    }
    setSelected(_selected)
  }, [])

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

  const updateSelected = (change) => {
    if (change === "add") setSelected(selected+1)
    else if (change === "remove") setSelected(selected-1)
  }

  return (
    <div className="App">
      <Header/>
      <section className="emotions">
        {
          filtered && selected === 0 ?
            <div className="no-emotions-container">
              No hay emociones seleccionadas
            </div>
          :
            <></>
        }
        {
          emotions.map(emotion => {
            return (
              <Emotion 
                emotion={emotion}
                key={emotion.name}
                filtered={filtered}
                updateSelected={updateSelected}
                updateEmotion={updateEmotion}
              />
            )
          })
        }
      </section>
      <section className="add">
        {
          filtered ? <></> : <AddEmotion/>
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
          aria-label="Mostrar emociones seleccionadas"
          onClick={() => setModal(true)}
        >
          <TextSnippetOutlinedIcon  className="iconButton"/>
        </IconButton>
      </section>
      <Footer/> 
      <Modal visible={modal} closeModal={() => {setModal(false)}}/>
    </div>
  );
}

export default App;
