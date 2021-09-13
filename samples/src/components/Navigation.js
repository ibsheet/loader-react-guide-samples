import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return  (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hello">Hello Sample</Link>
        </li>
        <li>
          <Link to="/format">Format Sample</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;