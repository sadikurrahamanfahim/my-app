import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }

  const hnaleOnChange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState("");

  const handleExtraspaces = () => {
    let newText = text.split(/[]+/);
    setText(newText.join(" "));
  }

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={hnaleOnChange} id="myBox" rows="5"></textarea>
          <div className="form-text">Enter Text Inside the BOX</div>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Upper Case</button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick} >Convert to Lower Case</button>
        <button className="btn btn-primary mx-3" onClick={handleExtraspaces} >Handle Extra Spaces</button>
      </div>
      <div className="container my-3">
        <h1>Yor text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Estimated time to read the text - {0.008 * text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
