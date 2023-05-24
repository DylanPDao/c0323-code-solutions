import './App.css';
import Menu from './Menu';

const content: string[] = [
  'sets',
  'Paldea Evolved',
  'Scarlet & Violet',
  'Crown Zenith',
  'Silver Tempest',
];

function App() {
  return (
    <div className="App">
      <Menu content={content} />
    </div>
  );
}

export default App;
