import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(color: string, text: string) {
    alert(`clicked ${color} ${text}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <CustomButton
            text="Fancy"
            color="red"
            onCustomClick={handleCustomClick}
          />
          <CustomButton
            text="Boujee"
            color="gold"
            onCustomClick={handleCustomClick}
          />
          <CustomButton
            text="Fantastic"
            color="pink"
            onCustomClick={handleCustomClick}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
