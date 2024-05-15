import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');//wheather dark mode is enbled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has enabled","success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has enabled","success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="About me" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {<div className="container my-3"><Textform showAlert={showAlert} heading="Enter the text to make UpperCase" mode={mode} /></div>}
      <div className="container my-3"><About/></div>
    </>
  );
}

export default App;