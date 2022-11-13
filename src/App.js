import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Pts from './Pages/pts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/place-to-stay' element={<Pts />} />
      </Routes>
    </div>
  );
}

export default App;
