import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { NavBar } from "./shared/NavBar";
import "./App.css";
import { MagazineSubmission } from "./MagazineSubmission/MagazineSubmission";
import { MinimumNumber } from "./MinimumNumber/MinimumNumber";
import { TemperatureConverter } from "./TemperatureConverter/TemperatureConverter";
import { Users } from "./Users/Users";

function App(this: any) {
  return (
    <NavBar>
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/temp-convert">Temperature Converter</Link>
              </li>
              <li>
                <Link to="/users/1">Users</Link>
              </li>
              <li>
                <Link to="/min">Minimum Number</Link>
              </li>
              <li>
                <Link to="/mag-sub">Magazine Submissions</Link>
              </li>
            </ul>
            <div style={{ height: "50px" }} />
          </div>
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
              <Route path="/users/:id" children={<Users />} />
              <Route path="/">
                <div>Hello!</div>
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    </NavBar>
  );
}

export default App;
