import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import MobileMenu from './components/MobileMenu';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}>
          <Route index element={<Main />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}

export default App;
