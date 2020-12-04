import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { NavBar } from "./shared/NavBar";
import "./App.css";
import { MagazineSubmission } from "./MagazineSubmission/MagazineSubmission";
import { MinimumNumber } from "./MinimumNumber/MinimumNumber";
import { TemperatureConverter } from "./TemperatureConverter/TemperatureConverter";
import { Users } from "./Users/Users";
import { Fizzbuzz } from "./FizzBuzz/FizzBuzz";

function App(this: any) {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route path="/temp-convert">
              <TemperatureConverter />
            </Route>
            <Route path="/min">
              <MinimumNumber />
            </Route>
            <Route path="/mag-sub">
              <MagazineSubmission />
            </Route>
            <Route path="/fizz-buzz">
              <Fizzbuzz />
            </Route>
            <Route path="/users/:id" children={<Users />} />
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
