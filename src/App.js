import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert.js";
import About from "./components/About.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Functional component
function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);
  // use for showing alerts
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  // useed for the toggle the modes in the page
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#152230";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          Title="TextUtility"
          About="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert}/>}></Route>
            <Route exact path="/About" element={<About/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
