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
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  setInput({
                    value: parseInt(event.currentTarget.value),
                    units: "F",
                  });
                }
              }}
            />
          </div>

          <label>Convert Celsius</label>
          <input
            id="celsiusField"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                setInput({
                  value: parseInt(event.currentTarget.value),
                  units: "C",
                });
                let converted = conversion;

                const changer = document.getElementById(
                  "farenheitField"
                ) as HTMLElement;
                changer.innerText = "some biz";
              }
            }}
          />
        </form>
        <div className="temp-text">{JSON.stringify(input)}</div>
      </div>
    </div>
  );
}

export default App;

//set up state
//hook this into the click event

const conversion = (units: TemperatureUnits, value: number) => {
  if (units === "F") {
    return (value * 9) / 5 + 32;
  } else {
    return ((value - 32) * 5) / 9;
  }
};

type TemperatureUnits = "F" | "C";
type UserInput = { value: number; units: TemperatureUnits };
