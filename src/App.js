import './App.css';
import './components/assets/home-search.css';
import './components/assets/home-search.css';
import MeteoSearch from './components/MeteoSearch';
import MeteoDetails from './components/MeteoDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MeteoSearch />} />
          <Route
            path="./components/MeteoDetails.jsx"
            element={<MeteoDetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
