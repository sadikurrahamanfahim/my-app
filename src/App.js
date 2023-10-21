import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import Textform from './components/Textform';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About me" />
      {/*<div className="container my-3"><Textform heading="Enter the text to make UpperCase" /></div>*/}
      <div className="container my-3"><About/></div>
    </>
  );
}

export default App;