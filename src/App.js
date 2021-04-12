import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { Provider } from "mobx-react";
import TasksStore from "./store/tasks";

function App() {
  return (
    <Provider tasksStore={new TasksStore()}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
