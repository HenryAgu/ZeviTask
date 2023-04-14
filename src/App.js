import React from "react";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "./components/Home";
import AllContextPlug from "./AllContext";
import SearchResult from "./components/SearchResult";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AllContextPlug>
              <Home />
            </AllContextPlug>
          }
        />
        <Route path="/search" element={<SearchResult/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
