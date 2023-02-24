import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> React Weather App</h1>
        <h2> Form is here</h2>
      </header>

      <footeer>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coded by Christina Lear, open-sourced via GetHub
        </a>
      </footeer>
    </div>
  );
}

export default App;
