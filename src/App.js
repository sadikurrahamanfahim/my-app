import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';

function App() {
  const[mode, setMode] = useState('light');//wheather dark mode is enbled or not
  
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode ('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="About me" mode={mode} toggleMode={toggleMode}/>
      {<div className="container my-3"><Textform heading="Enter the text to make UpperCase" /></div>}
      <div className="container my-3"><About /></div>
    </>
  );
}

export default App;