import React from "react";
import "./App.scss";
// import ScrollToTop from "./utils/ScrollToTopController";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./utils/aos";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-white bg-primary text-center display-2 mt-6">
          Ready To Use React App !!
          <FontAwesomeIcon icon="smile" />
        </h1>
      </div>
    </div>
  );
}

export default App;
