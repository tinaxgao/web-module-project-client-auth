import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <h2>Client Auth Project</h2>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
