import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Gamepage from './Gamepage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />}/>
        <Route path='/gamepage' element={<Gamepage/>}Navigate to="/"/>
      </Routes>
    </Router>
  );
};

export default App;