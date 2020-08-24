import React from "react";

import "./App.css";
import { TempConvert } from "./TempConvert";
import { CarBurn } from "./CarBurn";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App(this: any) {
  return (
    <div className="App">
      <Router>
        <nav className="bar">
          <ul className="bar nobull">
            <li>
              <Link to="/temp-convert">TempConvert</Link>
            </li>
            <li>
              <Link to="/car-burn/1">Carburn</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/temp-convert">
            <TempConvert />
          </Route>
          <Route path="/car-burn/:id" children={<CarBurn />} />
          <Route path="/">
            <div>Hello!</div>
          </Route>
        </Switch>
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
