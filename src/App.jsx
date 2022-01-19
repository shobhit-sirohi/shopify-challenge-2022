import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="px-4">
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
