import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { HeaderApp } from "./components/HeaderApp";
import { ListProducts } from "./components/Products/ListProducts";
import { AlertProduct } from "./components/Products/AlertProduct";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import HomePage from "./components/Homepage/homepage.js";

const App = () => {
  return (
    <>
      <HeaderApp />
      <Container>
        <div className="App">
          <Router>
            {/* <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:productId' element={<Product />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/admin' element={<Admin />} /> */}
          </Router>
          <AlertProduct />
          <ListProducts />
        </div>
      </Container>
    </>
  );
};

export default App;
