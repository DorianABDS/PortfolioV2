import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Project from '../components/pages/Project';
import Contact from '../components/pages/Contact';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
