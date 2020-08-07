import React, { useState } from "react";
import "./App.css";

function App(this: any) {
  const [input, setInput] = useState<UserInput>({ value: 0, units: "F" });

  return (
    <div className="App">
      <header className="App-header">Temperature Converter</header>

      <div>
        <form className="temp-text" onSubmit={() => false}>
          <div>
            <label> Convert Farenheit</label>
            <input
              id="farenheitField"
              onChange={(event) => {
                setInput({
                  value: parseInt(event.currentTarget.value),
                  units: "F",
                });
              }}
              value={conversionFromF(input.units, input.value)}
            />
          </div>

          <label>Convert Celsius</label>
          <input
            id="celsiusField"
            onChange={(event) => {
              setInput({
                value: parseInt(event.currentTarget.value),
                units: "C",
              });
            }}
            value={conversionFromC(input.units, input.value)}
          />
        </form>
        <div className="temp-text">{JSON.stringify(input)}</div>
      </div>
    </div>
  );
}

export default App;

const conversionFromF = (units: TemperatureUnits, value: number) => {
  if (units === "C") {
    return value * 1.8 + 32;
  } else if (units === "F") {
    return value;
  }
};

const conversionFromC = (units: TemperatureUnits, value: number) => {
  if (units === "F") {
    return (value - 32) / 1.8;
  } else if (units === "C") {
    return value;
  }
};

type TemperatureUnits = "F" | "C";
type UserInput = { value: number; units: TemperatureUnits };
