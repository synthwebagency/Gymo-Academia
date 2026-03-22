import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Modalidades from './pages/Modalidades';
import Musculacao from './pages/Musculacao';
import Aerobica from './pages/Aerobica';
import Karate from './pages/Karate';
import Voleibol from './pages/Voleibol';
import Basquetebol from './pages/Basquetebol';
import Boxe from './pages/Boxe';
import Futsal from './pages/Futsal';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<About />} />
          <Route path="/modalidades" element={<Modalidades />} />
          <Route path="/musculacao" element={<Musculacao />} />
          <Route path="/aerobica" element={<Aerobica />} />
          <Route path="/karate" element={<Karate />} />
          <Route path="/voleibol" element={<Voleibol />} />
          <Route path="/basquetebol" element={<Basquetebol />} />
          <Route path="/boxe" element={<Boxe />} />
          <Route path="/futsal" element={<Futsal />} />
        </Routes>
      </Layout>
    </Router>
  );
}
