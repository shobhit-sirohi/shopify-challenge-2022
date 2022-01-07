import React from "react";
import Home from "./components/Home";
import Apod from "./components/Apod";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    // <BrowserRouter>
    //   <ScrollToTop />
    //   <Routes>
    //     <Route path="/" exact element={<Home />} />
    //     <Route path="/apod" exact element={<Apod />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      <Home />
    </div>
  );
};

export default App;
