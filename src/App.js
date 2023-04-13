import './App.css';
import HomePage from './pages/HomePage';
import SquadPage from './pages/SquadPage';
import GalleryPage from './pages/GalleryPage';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        <Route path='/squad/' element={<SquadPage />} />
        <Route path='/galery/' element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
