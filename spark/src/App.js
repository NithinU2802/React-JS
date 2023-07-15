import logo from './image.gif';
import './App.css';

function App() {

  const name="Nithin";


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Hi..! This is me Nithin.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{name}</p>
      </header>
    </div>
  );
}

export default App;
