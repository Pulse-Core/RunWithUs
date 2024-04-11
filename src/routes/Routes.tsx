import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </Router>
  );
}

export default Routes;
