import React from "react";
import logo from "./logo.png";
import "./App.scss";
import { Typography } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h1" color="primary">
          Welcome to Wayloof...
        </Typography>
      </header>
    </div>
  );
}

export default App;
