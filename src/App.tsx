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
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  setTemp(parseInt(event.currentTarget.value));
                  setUnitsF(true);
                  console.log(temp, unitsF);
                }
              }}
            />
          </div>

          <label>Convert Celsius</label>
          <input
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                setTemp(parseInt(event.currentTarget.value));
                setUnitsF(false);
                console.log(temp, unitsF);
                //let celFromFar=((temp - 32) * 5/9);
              }
            }}
          />
        </form>
        <div className="temp-text">{temp}</div>
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
