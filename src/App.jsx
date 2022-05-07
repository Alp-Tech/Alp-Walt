import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Login />
    </React.Fragment>
  );
}

export default App;
