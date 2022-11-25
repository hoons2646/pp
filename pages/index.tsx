import type { NextPage } from "next";
import Navigation from "../components/gnb";
import styled from "styled-components";
import { products } from "../data/product";
import Product from "../components/product";

const MainContainer = styled.main`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px !important;

  @media only screen and (max-width: 1439px) {
    max-width: 988px;
  }
  @media only screen and (max-width: 1099px) {
    margin: auto 32px;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Navigation />
      <MainContainer>
        <Product products={products} />
      </MainContainer>
    </>
  );
};

export default Home;
