import React from "react";
import Home from "./pages/Home";
import Today from "./pages/Today";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Today" exact element={<Today />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
