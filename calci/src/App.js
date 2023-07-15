import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");
  const handelClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const solve = () => {
    try {
      setResult(result.toString());
    } catch (error) {
      setResult(error);
    }
  };
  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="keypad">
          <button className="highlight" onclick={clear} id="clear">
            Clear
          </button>
          <button onclick={backspace} id="delete">
            &#9003;
          </button>
          <button onclick={solve} id="result">
            =
          </button>
          <button name="+" onclick={handelClick}>
            +
          </button>
          <button name="8" onclick={handelClick}>
            9
          </button>
          <button name="8" onclick={handelClick}>
            8
          </button>
          <button name="7" onclick={handelClick}>
            7
          </button>
          <button name="6" onclick={handelClick}>
            &ndash;
          </button>
          <button name="5" onclick={handelClick}>
            6
          </button>
          <button name="4" onclick={handelClick}>
            5
          </button>
          <button name="3" onclick={handelClick}>
            4
          </button>
          <button name="2" onclick={handelClick}>
            &divide;
          </button>
          <button name="1" onclick={handelClick}>
            3
          </button>
          <button name="0" onclick={handelClick}>
            2
          </button>
          <button name="/" onclick={handelClick}>
            1
          </button>
          <button name="-" onclick={handelClick}>
            &times;
          </button>
          <button name="x" onclick={handelClick}>
            0
          </button>
          <button name="." onclick={handelClick}>
            .
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
