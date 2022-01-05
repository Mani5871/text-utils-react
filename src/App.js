import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import {useState} from "react";
import Alert from "./components/Alert";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  let [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === "dark")
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Mode changed to light", "success");
    }
    else
    {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showAlert("Mode changed to dark", "success");
    }
  }

  return (
  <>
    <Router>
      <Alert alert = {alert}/>
      <Navbar title = "TextUtils" aboutText = "About TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Routes>
        <Route exact path = "/about" element = {<About mode = {mode} toggleMode = {toggleMode}/>}/>
        <Route exact path = "/" element = {<Textform mode = {mode} toggleMode = {toggleMode} showAlert = {showAlert} alert = {alert}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
