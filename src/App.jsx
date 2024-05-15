import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import './App.css';
import { UserStorage } from './Contexts/UserContext';

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
