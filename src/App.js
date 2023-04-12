import React from "react";

// components
import Home from "./components/Home";
import AllContextPlug from "./AllContext";

const App = () => {
  return (
    <AllContextPlug>
      <Home />
    </AllContextPlug>
  );
};

export default App;
