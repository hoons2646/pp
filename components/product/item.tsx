import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";
import { BsFillChatDotsFill } from "react-icons/bs";

const ProductBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 14px;
  line-height: 20px;
`;
const ProductItemContainer = styled.div`
  display: flex;
  margin: 22px 2px;
  padding: 2px;

  border-radius: 8px;
  font-size: 14px;
  width: 100%;

  &:hover {
    background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
  }
`;
const ProductImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;

  img {
    border-radius: 8px;
  }
`;
const ProductTitle = styled.div``;
const ProductDescription = styled.div`
  margin-top: 4px;
`;
const ProductReply = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  p {
    padding-left: 4px;
  }
`;
const ProductVote = styled.div`
  width: 60px;
  height: 80px;
  border-radius: 8px;
  border: 1px solid rgb(217, 225, 236);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 4px;
  }
`;

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
