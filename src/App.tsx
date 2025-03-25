import React from "react";
import InputTask from "./components/InputTask";
import AddTask from "./components/AddTask";
import "./App.css";

function App() {
  return (
    <div className="task">
      <InputTask />
      <AddTask />
    </div>
  );
}

export default App;
