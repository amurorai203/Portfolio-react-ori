import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import ContactForm from './components/pages/ContactForm';

function App() {
  return (
    <Router>
      <Header />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/Portfolio-react/" element={<Home />} />
        <Route path="/Portfolio-react/projects/" element={<Projects />} />
        {/* Define a route that will have descendant routes */}
        <Route path="/Portfolio-react/contact/*" element={<Contact />} />
      </Routes>
      <footer>
    <div class="align-bottom">
      <p>&copy; Powered by Github. With edX Front-End Web Development program.</p>
    </div>
  </footer>
    </Router>
  );
}

export default App;
