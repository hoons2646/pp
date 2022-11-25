import React from "react";
import styled from "styled-components";
import ProductItem from "./Item";

const ProductContainer = styled.div`
  display: flex;
  padding: 20px 0;
  width: 100%;
  flex-direction: column;
`;

const Product = ({ products }: any) => {
  return (
    <ProductContainer>
      {products && products.map((data: any, index: number) => <ProductItem products={data} key={index}/>)}
    </ProductContainer>
  );
};

export default Product;
