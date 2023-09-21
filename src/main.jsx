import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./components/App.jsx";
import About from "./components/AboutPage.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex justify-center items-center  py-5">
      <div className="w-1/2 rounded-2xl border shadow-xl shadow-gray-500 overflow-hidden">
        <Router>
          <nav className="flex justify-between px-5 py-3 bg-primary items-center opacity-70">
            <Link to="/" className="text-h4">
              #VANLIFE
            </Link>
            <div>
              <Link to="/About">About</Link>
              <Link to="/About">About</Link>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </Router>
      </div>
    </div>
  </React.StrictMode>
);
