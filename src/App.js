import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import React, { useState } from 'react';

function App() {
  const[darkMode, setDarkMode] = useState('dark');//wheather dark mode is enbled or not
  return (
    <>
      <Navbar title="TextUtils" about="About me" />
      {<div className="container my-3"><Textform heading="Enter the text to make UpperCase" /></div>}
      <div className="container my-3"><About /></div>
    </>
  );
}

export default App;