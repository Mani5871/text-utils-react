import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import {useState} from "react";


function App() {

  let [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if(mode === "dark")
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    else
    {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
    }
  }

  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Textform heading = "Enter text to analyze" mode = {mode} toggleMode = {toggleMode}/>
      {/* <About/> */}
    </>
  );
}

export default App;
