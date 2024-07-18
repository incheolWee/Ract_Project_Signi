import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/js/Header';
import MainContent from './components/js/MainContent';
import Illustration from './components/js/Illustration';
import WorkPage from './components/js/WorkPage';
import './App.css';
import TestPage from './pages/TestPage';

function App() {
  return (
    // <TestPage />
    <WorkPage />
    // <Router>
    //   <div className="App">
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={<><MainContent /><Illustration /></>} />
    //       <Route path="/work" element={<WorkPage />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
