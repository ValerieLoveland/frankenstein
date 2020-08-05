import React, { useState } from "react";
import "./App.css";

function App(this: any) {
  const [unitsF, setUnitsF] = useState(true);
  const [temp, setTemp] = useState(0);
  return (
    <div className="App">
      <header className="App-header">Temperature Converter</header>

      <div>
        <form className="temp-text" onSubmit={() => false}>
          <div>
            <label> Convert Farenheit</label>
            <input
              onChange={(event) => {
                setTemp(parseInt(event.currentTarget.value));
                setUnitsF(true);
                console.log(temp, unitsF);
              }}
            />
          </div>

          <label>Convert Celsius</label>
          <input
            onChange={(event) => {
              setTemp(parseInt(event.target.value));
              setUnitsF(false);
              console.log(temp, unitsF);
            }}
          />
        </form>
        <div>{temp}</div>
      </div>
    </div>
  );
}

export default App;

//set up state
//hook this into the click event
