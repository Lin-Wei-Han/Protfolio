import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Project from './pages/Project';
import Contact from './pages/Contact';
import ServiceGA4 from "./services/ga4.service";
import './dist/scss/navbar.scss';
import './dist/scss/footerResponse.scss';

ServiceGA4.init();

function App() {

  React.useEffect(() => {
    ServiceGA4.pageView(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
