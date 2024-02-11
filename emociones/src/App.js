import './App.css';
import Emotion from './components/Emotion';

let emotions = require("./emotions.json")

function App() {
  return (
    <div className="App">
      <header className="header">
       <h1>Emociones</h1>
      </header>
      <section className="emotions">
        {
          emotions.map(emotion => {
            return (
              <Emotion emotion={emotion}/>
            )
          })
        }
      </section>
    </div>
  );
}

export default App;
