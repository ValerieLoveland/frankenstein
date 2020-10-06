import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import { CardDisplay, FizzBuzz } from "./CardDisplay";
import { MagSub } from "./MagSub";
import { Min } from "./Min";
import { TempConvert } from "./TempConvert";

function App(this: any) {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul className="bar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/temp-convert">Temperature Converter</Link>
            </li>
            <li>
              <Link to="/card-display/1">Card Display</Link>
            </li>
            <li>
              <Link to="/min">Minimum Number</Link>
            </li>
            <li>
              <Link to="/mag-sub">Magazine Submissions</Link>
            </li>
          </ul>
          <div style={{ height: "50px" }} />
        </nav>
        <main>
          <Switch>
            <Route path="/temp-convert">
              <TempConvert />
            </Route>
            <Route path="/min">
              <Min />
            </Route>
            <Route path="/mag-sub">
              <MagSub />
            </Route>
            <Route path="/card-display/:id" children={<CardDisplay />} />
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
