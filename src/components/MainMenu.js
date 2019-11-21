import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const MainMenu = () => (
  <div>
    <Link to="/">
      <Button>home</Button>
    </Link>
    <Link to="/about">
      <Button>About</Button>
    </Link>
  </div>
);


export default MainMenu;
