import "./styles.css";
import { useState } from "react";
export default function App() {
  const [string, setString] = useState("");
  const [boolean, setBoolean] = useState(false);
  const handleClick = () => {
    const firstCondition = string.length > 8;
    const secondCondition = string.search(/[a-z]/) !== -1;
    const thirdCondition = string.search(/[A-Z]/) !== -1;
    const fourthCondition = string.search(/[\W\D]/) !== -1;
    const fifthCondition = string.search(/[˜`*]/) === -1;
    const totalTrue =
      firstCondition &&
      secondCondition &&
      thirdCondition &&
      fourthCondition &&
      fifthCondition;
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
