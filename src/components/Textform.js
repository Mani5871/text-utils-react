import React, { useState } from 'react'
import './components.css'

export default function Textform(props) {

    const [text, setText] = useState("");

    const clearText = () => {
        setText("");
    }

    const uppercase = () => {
        setText(text.toUpperCase());
    }

    const lowercase = () => {
        setText(text.toLowerCase());
    }

    const capitalize = () => {
        setText(text.charAt(0).toUpperCase() + text.slice(1));
    }

    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    const sortHandler = () => {
        let arr = text.split(" ");
        arr.sort();
        setText(arr.join(" "));
    }

    const reverseHandler = () => {
        let arr = text.split("");
        arr.reverse();
        setText(arr.join(""));
    }

    return (
        <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange = {onChangeHandler} value = {text} id="myBox" rows="8"></textarea>
                    <button className="btn btn-primary my-4"  onClick={uppercase}>Upper Case</button>
                    <button className="btn btn-secondary my-4 mx-2"  onClick={lowercase}>Lower Case</button>
                    <button className="btn btn-success my-4 "  onClick={clearText}>Clear Text</button>
                    <button className="btn btn-info my-4 mx-2"  onClick={capitalize}>Capitalize</button>
                    <button className="btn btn-warning my-4"  onClick={sortHandler}>Sort</button>
                    <button className="btn btn-danger my-4 mx-2"  onClick={reverseHandler}>Reverse</button>
                </div>
            </div>

            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words</p>
                <p>{text.length} characters</p>
                <p>{text.split(" ").length * 0.008} Minutes to read the text</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
