import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ToggleButton
            text="Btn 1"
            color="red"
            text2="Clicked Btn 1"
            color2="green"
          />
          <ToggleButton
            text="Btn 2"
            color="blue"
            text2="Clicked Btn 2"
            color2="yellow"
          />
          <ToggleButton
            text="Btn 3"
            color="orange"
            text2="Clicked Btn 3"
            color2="pink"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
