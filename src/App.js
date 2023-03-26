import logo from './manginado-romano-logo.png';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>Voi magnà? Allora clicca qua</b>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          VAI
        </a>
      </header>
    </div>
  );
}

export default App;
