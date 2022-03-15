import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Header from "./Components/Navbar"
import AddProduct from "./Components/AddProduct";
import UpdateProduct from "./Components/UpdateProduct";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/slices/productsSlice";

const Home = React.lazy(() => import("./Components/Home"));
const Products = React.lazy(() => import("./Components/Products"));
const ProductDetails = React.lazy(() => import("./Components/ProductDetails"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
    <Header></Header>
    <AppFrame className="App">
      <BrowserRouter basename="/">
      <Suspense fallback={<p>...Loading page please wait</p>}>
        <Switch>
          <Route
            path="/addproduct"
            render={(props) => <AddProduct {...props} />}>
          </Route>
          <Route
              path="/"
              exact
              render={(props) => <Home {...props} />}
            >
            </Route>
            <Route
              path="/products"
              render={(props) => <Products {...props} />}
            ></Route>
            <Route
              path="/product/:name"
              render={(props) => <ProductDetails {...props} />}
            ></Route>
            <Route
                   path="/update/:id"
                   render={(props) => <UpdateProduct {...props} />}
            ></Route>
            <Route exact render={() => <p>Page not found!</p>}></Route>
          </Switch>
        </Suspense>  
      </BrowserRouter>
    </AppFrame>
    </>
  );
}
const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;
export default App;