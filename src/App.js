import './App.css';
import Add from './Add';
import List from './List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <Add></Add>
        <List></List>
      </header>
    </div>
  );
}

export default App;
