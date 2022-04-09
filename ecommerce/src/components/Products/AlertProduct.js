import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

export const AlertProduct = () => {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState("");

  useEffect(() => {
    const lastProduct = sessionStorage.getItem("lastProduct");

    if (lastProduct) {
      setProduct(lastProduct);
      setShow(true);
    }

    return () => {
      sessionStorage.removeItem("lastProduct");
    };
  }, []);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Continua shopping!</Alert.Heading>
        <p>Buy the product {product} before it runs out!</p>
      </Alert>
    );
  } else {
    return <></>;
  }
};
