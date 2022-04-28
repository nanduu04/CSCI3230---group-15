import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../logo.svg";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import { Link } from 'react-router-dom';

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
      {/* <Link to={'/'}>Home</Link>
      <Link to={'/products'}>Products</Link>
      <Link to={'/login'}>Login</Link>
      <Link to='/signup'>Signup</Link>
      <Link to={'/admin'}>Admin</Link> */}
    </Container>
  </Navbar>
);
