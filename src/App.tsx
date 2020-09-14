import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import { CarBurn } from "./CarBurn";
import { TempConvert } from "./TempConvert";

function App(this: any) {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul className="bar ulStyle">
            <li>
              <Link to="/temp-convert">TempConvert</Link>
            </li>
            <li>
              <Link to="/car-burn/1">Carburn</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/temp-convert">
              <TempConvert />
            </Route>
            <Route path="/car-burn/:id" children={<CarBurn />} />
            <Route path="/">
              <div>Hello!</div>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;

// const conversionToF = (units: TemperatureUnits, value: number) => {
//   if (units === "C") {
//     return value * 1.8 + 32;
//   }
//   return value;
// };

// const conversionToC = (units: TemperatureUnits, value: number) => {
//   if (units === "F") {
//     return (value - 32) / 1.8;
//   }
//   return value;
// };
