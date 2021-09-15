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
          <Link to="/type">Type Sample</Link>
        </li>
        <li>
          <Link to="/merge">Merge Sample</Link>
        </li>
        <li>
          <Link to="/tree">Tree Sample</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;