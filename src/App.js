import logo from './img/manginado-romano-logo.png';
import './Styles/App.css';
import ButtonVai from './Components/ButtonVai.tsx';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>Voi magnà? Allora clicca qua</b>
        </p>
       <ButtonVai label="VAI"></ButtonVai>
      </header>
    </div>
  );
}

export default App;
