import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => (
  <div>
    <Link to="/">
      <button>home</button>
    </Link>
    <Link to="/about">
      <button>About</button>
    </Link>
  </div>
);


export default MainMenu;
