import HomePage from './pages/HomePage';
import SquadPage from './pages/SquadPage';
import GalleryPage from './pages/GalleryPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        <Route path='/squad/' element={<SquadPage />} />
        <Route path='/gallery/' element={<GalleryPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
