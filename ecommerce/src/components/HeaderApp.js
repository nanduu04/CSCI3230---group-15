import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../logo.svg";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import Button from "@restart/ui/esm/Button";

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
      <Button to='/home'>Home</Button>
      <Button to='/products'>Products</Button>
      <Button to='/login'>Login</Button>
      <Button to='/signup'>Signup</Button>
      <Button to='/admin'>Admin</Button>
    </Container>
  </Navbar>
);
