import './App.css';
import Emotion from './components/Emotion';

function App() {
  return (
    <div className="App">
      <header className="header">
       <h1>Emociones</h1>
      </header>
      <section className="emotions">
        <Emotion/>
      </section>
    </div>
  );
}

export default App;
