import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { storesContext, useStores } from "./store/stores";

function App() {
  const stores = useStores();
  return (
    <storesContext.Provider value={stores}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </storesContext.Provider>
  );
}

export default App;
