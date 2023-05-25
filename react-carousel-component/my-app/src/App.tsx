import './App.css';
import Carousel from './Carousel';

const images = [
  { imgLocation: '/images/001.png', id: 0 },
  { imgLocation: '/images/004.png', id: 1 },
  { imgLocation: '/images/007.png', id: 2 },
  { imgLocation: '/images/025.png', id: 3 },
  { imgLocation: '/images/039.png', id: 4 },
];

function App() {
  return (
    <div className="App">
      <Carousel images={images} />
    </div>
  );
}

export default App;
