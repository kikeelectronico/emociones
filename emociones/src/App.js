import React, {useState} from "react";
import './App.css';
import Emotion from './components/Emotion';

let emotions = require("./emotions.json")

function App() {

  const [selected, setSelected] = useState([])

  const selectEmotion = (emotion_name) => {
    let _selected = [...selected]
    if (!_selected.includes(emotion_name)) {
      _selected.push(emotion_name)
    } else {
      let index = _selected.indexOf(emotion_name)
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
                selected={selected.includes(emotion.name)}
                key={emotion.name}
                select={selectEmotion}
              />
            )
          })
        }
      </section>
    </div>
  );
}

export default App;
