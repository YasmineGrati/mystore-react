import React from "react";
import styled from "styled-components";
//import products from "../products.json";
import Product from "./Product";
import {useApi} from "../hooks/useApi";
import {queryApi} from "../utils/queryApi";

export default function Products(props) {
    const[result,error,reload] = useApi("products");
    //const [products, err, reload] = useApi('products');
    return (
        <>
        <Footer>
                <Button onClick={
                    () => props.history.replace("/addproduct")
                }>Add new product</Button>
        </Footer>
        <ProductsWrapper> {
            result?.map((product, index) => (
                <Product product={product}
                    key={index}>
                </Product>
            ))
        } </ProductsWrapper>
        </>
    );
}
const ProductsWrapper = styled.div `
 text-align: center; 
 display: flex; 
`;
const Errors = styled.p `
  color: red;
`;
const Footer = styled.footer `
  background: transparent;
  grid-area: footer;
  padding: 0.15rem;
  text-align: right !important;
`;
const Search = styled.footer `
  background: transparent;
  grid-area: footer;
  padding: 0.15rem;
  text-align: center !important;
`;
const Button = styled.button `
  /* Adapt the colors based on primary prop */
  background: ${
    (props) => (props.primary ? "palevioletred" : "white")
};
  color: ${
    (props) => (props.primary ? "white" : "palevioletred")
};

  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const FormGroup = styled.div `
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;
const FormField = styled.input `
  color: black;
  padding: 15px;
  outline: 0;
  border-width: 0 0 2px;
  border-color: #ebebeb;
  ::placeholder {
    text-transform: uppercase;
    font-family: "Kiona";
    font-size: large;
    letter-spacing: 0.1rem;
  }
`;
const FormButton = styled.button `
  background: #7b1bf7;
  text-transform: uppercase;
  color: white;
  border-radius: 25px;
  padding: 15px;
  border: 0;
  font-size: large;
  margin: 10px 0;
  font: 200 larger Kiona;
`;