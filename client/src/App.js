import React from "react";
import { Card } from "./components/Card";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Login />
      <Card />
    </div>
  )
}

export default App;
