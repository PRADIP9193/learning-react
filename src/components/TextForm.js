import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // Convert to UppperCase
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  // Convert to LowerCase
  const handleLoClick = () => {
    // console.log("Lowercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  // copy the text
  const handleCopy = () => {
    //
    // console.log("Copy to text");
    var Text = document.getElementById("myBox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    props.showAlert("copied!", "success");
  };

  // Clear the text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared..", "success");
  };

  // Convert to Binary Code
  const handleBinaryClick = () => {
    let newText = text
      .split("")
      .map(function (char) {
        return char.charCodeAt(0).toString(2);
      })
      .join(" ");
    setText(newText);
    props.showAlert("Converted to Binary Code", "success");
  };

  const handleOnChange = (Event) => {
    console.log("On change");
    setText(Event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#152230" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            style={{
              backgroundColor: props.mode === "dark" ? "#152230" : "white",
              color: props.mode === "dark" ? "white" : "#152230",
            }}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleBinaryClick}>
          Convert to Binary
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something above text box to priview here"}
        </p>
      </div>
    </>
  );
}
