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
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                setInput({
                  value: parseInt(event.currentTarget.value),
                  units: "C",
                });
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

// const conversion=(e)=>{
// let celFromFar=(({temp} − 32) × 5/9);
// let farFromCel=(({temp} × 9/5) + 32)

// }
type TemperatureUnits = "F" | "C";
type UserInput = { value: number; units: TemperatureUnits };
