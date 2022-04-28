import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { NavDropdown, Nav, Navbar } from "react-bootstrap";
import db from "../../app/db/db";
import { ShoppingCartItem } from "./ShoppingCartItem";

export const ShoppingCart = () => {
  const [productsCart, setProductsCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getTotalPrice = () => {
    const total = productsCart?.reduce((totalPrice, currentProduct) => {
      return totalPrice + currentProduct.price;
    }, 0);
    setTotalPrice(total);
  };

  useLiveQuery(async () => {
    const productsDB = await db.cart.toArray();
    setProductsCart(productsDB);
  }, []);

  useEffect(() => {
    if (productsCart.length > 0) {
      getTotalPrice();
    }
  }, [productsCart]);

  return (
    <>
      <Navbar.Toggle aria-controls="navbar-dark-example" />
      <Navbar.Collapse id="navbar-dark-example">
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Cart"
            menuVariant="dark"
          >
            {productsCart?.map((product) => {
              return <ShoppingCartItem key={product.id} item={product}/>;
            })}
            <NavDropdown.Divider />
            <NavDropdown.Item id ="total">Total: ${totalPrice} </NavDropdown.Item>
            <NavDropdown.Item href="#/clear_cart"  id="clear" >Clear Cart</NavDropdown.Item>
            <NavDropdown.Item href="https://thehub5.github.io/"  id="checkout" >Checkout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};
