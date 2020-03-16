import React from 'react';
import { Link } from 'react-router-dom'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import HubSpotSymbol from '../images/hubspot_symbol.png'

const MainMenu = () => (
  <div>
    <Navbar color="light" light expand="md" className="mb-3">
      <NavbarBrand>
        <img src={HubSpotSymbol} width={"50px"} alt="hubspot symbol"/>
      </NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">
            <Button outline color="info">Home</Button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/about">
            <Button outline color="info">About Chris</Button>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);


export default MainMenu;
