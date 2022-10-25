import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Start from './pages/Start.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Start />}/>
        <Route path='/start' element={<Start />}/>
      </Routes>
    </div>
  );
}

export default App;
