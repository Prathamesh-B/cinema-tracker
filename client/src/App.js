import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Card } from "./components/Card";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Card />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
