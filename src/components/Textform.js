import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase", "success")
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase", "success")
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState("");

  const handleExtraspaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces handled", "success")
  }

  return (
    <>
      <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white' , color: props.mode==='light'?'black':'white'}} id="myBox" rows="5"></textarea>
          <div className="form-text">Enter Text Inside the BOX</div>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Upper Case</button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick} >Convert to Lower Case</button>
        <button className="btn btn-primary mx-3" onClick={handleExtraspaces} >Handle Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>Yor text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Estimated time to read the text - {0.008 * text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text"}</p>
      </div>
    </>
  )
}
