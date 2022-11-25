import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";
import { BsFillChatDotsFill } from "react-icons/bs";

import {
  ProductBox,
  ContentBox,
  ProductItemContainer,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductReply,
  ProductVote,
} from './style';


const ProductItem = ({ products }: any) => {
  return (
    <ProductItemContainer>
      <ProductImage>
        <Image
          src={products.image}
          width="80"
          height="80"
          alt="product image"
        />
      </ProductImage>
      <ProductBox>
        <ContentBox>
          <ProductTitle>{products.title}</ProductTitle>
          <ProductDescription>{products.description}</ProductDescription>
          <ProductReply>
            <BsFillChatDotsFill />
            <p>{products.reply.length}</p>
          </ProductReply>
        </ContentBox>
        <ProductVote>
          <h3>
            <IoIosArrowUp style={{ fontSize: "24px" }} />
          </h3>
          <p>23</p>
        </ProductVote>
      </ProductBox>
    </ProductItemContainer>
  );
};

export default ProductItem;
