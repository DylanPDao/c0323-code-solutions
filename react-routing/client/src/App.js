import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Catalog />} />
            <Route path="details/:productId" element={<ProductDetails />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
