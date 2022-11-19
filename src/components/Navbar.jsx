import React, { useState } from "react";
import {Container, List, Menu, Nav, ListItems} from "./NavbarStyle.js";


const Navbar = () => {
    const [active, setActive] = useState(false);

  return (
    <Container>
      <div>WanderOn</div>
      <div>+91-9870301533</div>
      <Nav active={active}>
        <List>
          <ListItems>Diwali Sale</ListItems>
          <ListItems>International Trips</ListItems>
          <ListItems>Blogs</ListItems>
          <ListItems>About Us</ListItems>
        </List>
      </Nav>
      <Menu onClick={()=> setActive(prev=> !prev)}>
        <i className="fa-solid fa-bars"></i>
      </Menu>
    </Container>
  );
};

export default Navbar;
