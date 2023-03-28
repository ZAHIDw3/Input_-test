import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState({
    input1: "",
    input2: "",
    password: "",
    checkbox: "",
    color: "",
    date: "",
    datetimeLocal: "",
    email: "",
    file: "",
    hidden: "",
    image: "",
    month: "",
    number: "",
    radio: "",
    range: "",
    reset: "",
    search: "",
    tel: "",
    time: "",
    url: "",
    week: "",
  });
  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    });
    console.log(inputValue)
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
      <br />
      <label>
        Password
        <input
          name="password"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="password"
          value={inputValue.password}
        />
      </label>
      <br />
      <label>
        checkbox
        <input
          name="checkbox"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="checkbox"
          value={inputValue.checkbox}
        />
      </label>
      <br />
      <label>
        color
        <input
          name="color"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="color"
          value={inputValue.color}
        />
      </label>
      <br />
      <label>
        date
        <input
          name="date"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="date"
          value={inputValue.date}
        />
      </label>
      <br />
      <label>
        datetime-local
        <input
          name="datetimeLocal"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="datetime-local"
          value={inputValue.datetimeLocal}
        />
      </label>
      <br />
      <label>
        email
        <input
          name="email"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="email"
          value={inputValue.email}
        />
      </label>
      <br />
      <label>
        file
        <input
          name="file"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="file"
          value={inputValue.file}
        />
      </label>
      <br />
      <label>
        hidden
        <input
          name="hidden"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="hidden"
          value={inputValue.hidden}
        />
      </label>
      <br />
      <label>
        image
        <input
          name="image"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="image"
          value={inputValue.image}
        />
      </label>
      <br />
      <label>
        month
        <input
          name="month"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="month"
          value={inputValue.month}
        />
      </label>
      <br />
      <label>
        number
        <input
          name="number"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="number"
          value={inputValue.number}
        />
      </label>
      <br />
      <label>
        radio
        <input
          name="radio"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="radio"
          value={inputValue.radio}
        />
      </label>
      <br />
      <label>
        range
        <input
          name="range"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="range"
          value={inputValue.range}
        />
      </label>
      <br />
      <label>
        reset
        <input
          name="reset"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="reset"
          value={inputValue.reset}
        />
      </label>
      <br />
      <label>
        search
        <input
          name="search"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="search"
          value={inputValue.search}
        />
      </label>
      <br />
      <label>
        tel
        <input
          name="tel"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="tel"
          value={inputValue.tel}
        />
      </label>
      <br />
      <label>
        time
        <input
          name="time"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="time"
          value={inputValue.time}
        />
      </label>
      <br />
      <label>
        url
        <input
          name="url"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="url"
          value={inputValue.url}
        />
      </label>
      <br />
      <label>
        week
        <input
          name="week"
          className="mt-2"
          onChange={(e) => handleInputChange(e)}
          type="week"
          value={inputValue.week}
        />
      </label>
    </div>
  )
}

export default App
