import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="text-1 mb-10">hello world </h1>
      <div className="flex ml-0">
        <ul className="flex flex-col ml -0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/usestate">useStatePage</Link>
          </li>
          <li>
            <Link to="/useEffect">useEffectPage</Link>
          </li>
          <li>
            <Link to="/useContext">useContextPage</Link>
          </li>
          <li>
            <Link to="/useCallBack">useCallBack</Link>
          </li>
          <li>
            <Link to="/useMemo">useMemo</Link>
          </li>
          <li>
            <Link to="/useRef">useRef</Link>
          </li>
          <li>
            <Link to="/useReducer">useReducer</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
