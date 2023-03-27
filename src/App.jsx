import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState({
    input1: "",
    input2: "",
  });
  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Input Test</h1>
      <hr />
      <label htmlFor="input1">Input1</label>
      <input
        id="input1"
        name="input1"
        onChange={(e) => handleInputChange(e)}
        type="text"
        value={inputValue.input1}
      />
      <br />
      <label>
        Input2
        <input
          name="input2"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="text"
          value={inputValue.input2}
        />
      </label>
    </div>

  )
}

export default App
