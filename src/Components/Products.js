import React from "react";
import styled from "styled-components";
//import products from "../products.json";
import Product from "./Product";
import {useApi} from "../hooks/useApi";
export default function Products() {
    const[result,error,reload] = useApi("products");
    return (
        <ProductsWrapper> {
            result?.map((product, index) => (
                <Product product={product}
                    key={index}></Product>
            ))
        } </ProductsWrapper>
    );
}
const ProductsWrapper = styled.div `
 text-align: center; 
 display: flex; 
`;