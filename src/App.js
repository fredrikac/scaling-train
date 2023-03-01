import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EditorialStaff from './pages/EditorialStaff';
import Review from './components/Review';
import Header from './components/Header';
import Footer from './components/Footer';
import Start from './pages/Start.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Start />}/>
        <Route path='/start' element={<Start />}/>
        <Route path='/:date/:title' element={<Review />} />
        <Route path='/redaktionen' element={<EditorialStaff />}/>
        <Route path='/redaktionen/:namn'/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
