import React from "react";
import Home from "./components/Home";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    // <BrowserRouter>
    //   <ScrollToTop />
    //   <Routes>
    //     <Route path="/" exact element={<Home />} />
    //     <Route path="/apod" exact element={<Apod />} />
    //   </Routes>
    // </BrowserRouter>
    <div className="px-4">
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
