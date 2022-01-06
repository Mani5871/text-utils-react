import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import {useState} from "react";
import Alert from "./components/Alert";
import React from "react";

function App() {

  let [mode, setMode] = useState("light");
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
    <Navbar title = "TextUtils" aboutText = "About TextUtils" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <Textform mode = {mode} toggleMode = {toggleMode} showAlert = {showAlert} alert = {alert}/>
    {/* <Router>
      <Routes>
        <Route exact path = "/" element = {<Textform mode = {mode} toggleMode = {toggleMode} showAlert = {showAlert} alert = {alert}/>}/>
      </Routes>
    </Router> */}
    </>
  );
}

export default App;
