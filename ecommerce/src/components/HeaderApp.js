import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../logo.svg";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import { Button } from "react-bootstrap";

const style = {
  marginBottom: "30px",
};

export const HeaderApp = () => (
  <Navbar bg="dark" variant="dark" style={style}>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Final Project
      </Navbar.Brand>
      <ShoppingCart />
      <div>
        <Button>Home</Button>
        <Button>Products</Button>
        <Button>Login</Button>
        <Button>SignUp</Button>
        <Button>Admin</Button>
      </div>
    </Container>
  </Navbar>
);
