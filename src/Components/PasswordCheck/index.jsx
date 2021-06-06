import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [string, setString] = useState("");
  const [boolean, setBoolean] = useState(false);
  const handleClick = () => {
    const firstCondition = string.length > 8;
    const secondCondition = string.match(/[a-z]{2}/);
    const thirdCondition = string.match(/[A-Z]{2}/);
    const fourthCondition = string.match(/[!@#$%ˆ&()]{2}/);
    const fifthCondition = !string.match(/[˜`*]/);
    const sixthCondition = string.match(/[\d]{2}/);
    const totalTrue =
      firstCondition &&
      secondCondition &&
      thirdCondition &&
      fourthCondition &&
      fifthCondition &&
      sixthCondition;
    if (totalTrue) {
      setBoolean(true);
    } else {
      setBoolean(false);
    }
  };
  return (
    <div className="App">
      <input value={string} onChange={(e) => setString(e.target.value)} />
      <button style={{ width: "100px", height: "50px" }} onClick={handleClick}>
        click
      </button>
      <h1 style={{ color: boolean ? "green" : "red" }}>
        {boolean ? string : "codition not met"}
      </h1>
    </div>
  );
}
