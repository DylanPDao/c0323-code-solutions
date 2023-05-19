import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App">
          <CustomButton text="I" color="green" textColor="white" />
          <CustomButton text="know" color="red" textColor="white" />
          <CustomButton text="React!" color="blue" textColor="white" />
        </div>
      </header>
    </div>
  );
}

export default App;
