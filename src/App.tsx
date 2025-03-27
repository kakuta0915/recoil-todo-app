import React from "react";
import { RecoilRoot } from "recoil";
import InputTask from "./components/InputTask";
import AddTask from "./components/AddTask";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <div className="task">
        <InputTask />
        <AddTask />
      </div>
    </RecoilRoot>
  );
}

export default App;
